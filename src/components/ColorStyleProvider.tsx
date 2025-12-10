import React from 'react';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

interface ColorStyleProviderProps {
    children: React.ReactNode;
}

/**
 * ColorStyleProvider injects CSS custom properties based on site settings.
 * These CSS variables can be used throughout the application for dynamic theming.
 */
const ColorStyleProvider: React.FC<ColorStyleProviderProps> = ({ children }) => {
    const settings = useSiteSettings();
    const colors = settings.colors_section;

    // Default colors if not provided
    const defaultColors = {
        primaryColor: '#D84315',
        primaryForeground: '#ffffff',
        secondaryColor: '#1e3a5f',
        accentColor: '#FF7043',
        headerBgColor: '#1e3a5f',
        headerTextColor: '#ffffff',
        footerBgColor: '#1e293b',
        footerTextColor: '#ffffff',
    };

    const currentColors = { ...defaultColors, ...colors };

    const cssVariables: React.CSSProperties = {
        '--color-primary': currentColors.primaryColor,
        '--color-primary-foreground': currentColors.primaryForeground,
        '--color-secondary': currentColors.secondaryColor,
        '--color-accent': currentColors.accentColor,
        '--color-header-bg': currentColors.headerBgColor,
        '--color-header-text': currentColors.headerTextColor,
        '--color-footer-bg': currentColors.footerBgColor,
        '--color-footer-text': currentColors.footerTextColor,
        '--color-button-bg': currentColors.buttonBgColor || currentColors.primaryColor,
        '--color-button-text': currentColors.buttonTextColor || currentColors.primaryForeground,
    } as React.CSSProperties;

    return (
        <div style={cssVariables} className="color-style-provider">
            {children}
        </div>
    );
};

export default ColorStyleProvider;
