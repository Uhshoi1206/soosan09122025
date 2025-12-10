// Types for Site Settings from CMS
export interface BranchAddress {
    province: string;
    address: string;
    phone: string;
    mapUrl?: string;
}

export interface Branch {
    regionName: string;
    addresses: BranchAddress[];
}

export interface SiteSettings {
    general_section: {
        siteName: string;
        siteTagline: string;
        siteDescription: string;
        siteKeywords?: string[];
        siteUrl: string;
    };
    images_section: {
        logo: string;
        logoAlt: string;
        favicon: string;
        ogImage?: string;
    };
    contact_section: {
        phone: string;
        phoneDisplay: string;
        email: string;
        address?: string;
    };
    branches: Branch[];
    social_section: {
        facebookUrl?: string;
        facebookUsername?: string;
        messengerUrl?: string;
        youtubeUrl?: string;
        youtubeChannelName?: string;
        tiktokUrl?: string;
        tiktokUsername?: string;
        zaloPhone?: string;
    };
    seo_section: {
        googleVerification?: string;
        bingVerification?: string;
        themeColor: string;
    };
    organization_section: {
        organizationName: string;
        organizationType: 'LocalBusiness' | 'Corporation' | 'Organization';
        foundingDate?: string;
        vatNumber?: string;
    };
}

// Default settings for fallback
export const defaultSiteSettings: SiteSettings = {
    general_section: {
        siteName: 'Soosan Motor',
        siteTagline: 'Chuyên cung cấp xe tải chất lượng',
        siteDescription: 'Chuyên cung cấp xe tải, đầu kéo, rơ moóc các loại.',
        siteKeywords: [],
        siteUrl: 'https://soosanmotor.com',
    },
    images_section: {
        logo: 'https://cdn.soosanmotor.com/soosanmotor.com_logo_Soosan.webp',
        logoAlt: 'Soosan Motor Logo',
        favicon: '/favicon.ico',
        ogImage: '/og-default.jpg',
    },
    contact_section: {
        phone: '0815555528',
        phoneDisplay: '0815555528',
        email: 'sales@soosanmotor.com',
        address: '',
    },
    branches: [],
    social_section: {},
    seo_section: {
        themeColor: '#dc2626',
    },
    organization_section: {
        organizationName: 'SOOSAN VINA MOTOR',
        organizationType: 'LocalBusiness',
    },
};
