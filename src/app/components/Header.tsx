"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/app/components/Header.module.scss'

import { routes, display } from '@/app/resources/config'
import { person, home, about, blog, projects } from '@/app/resources/content'

type TimeDisplayProps = {
    timeZone: string; // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <Flex style={{height: 'fit-content'}}
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth padding="8"
            justifyContent="center">
            <Flex
                hide="s"
                paddingLeft="12" fillWidth
                alignItems="center"
                textVariant="body-default-s">
                { display.location && (
                    <>{person.location}</>
                )}
            </Flex>
            <Flex
                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                padding="4"
                justifyContent="center">
                <Flex
                    gap="4"
                    textVariant="body-default-s">
                    { routes['/'] && (
                        <ToggleButton
                            prefixIcon="home"
                            href="/"
                            selected={pathname === "/"}>
                            <Flex hide="s">{home.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href="/about"
                            selected={pathname === "/about"}>
                            <Flex hide="s">{about.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/projects'] && (
                        <ToggleButton
                            prefixIcon="grid"
                            href="/projects"
                            selected={pathname === "/projects"}>
                            <Flex hide="s">{projects.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href="/blog"
                            selected={pathname.startsWith('/blog')}>
                            <Flex hide="s">{blog.label}</Flex>
                        </ToggleButton>
                    )}
                </Flex>
            </Flex>
            <Flex
                hide="s"
                paddingRight="12" fillWidth
                justifyContent="flex-end" alignItems="center"
                textVariant="body-default-s">
                { display.time && (
                    <TimeDisplay timeZone="Europe/Vienna"/>
                )}
            </Flex>
        </Flex>
    )
}