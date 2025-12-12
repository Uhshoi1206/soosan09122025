import React from 'react';
import { CompareProvider } from '@/contexts/CompareContextAstro';
import { SiteSettingsProvider } from '@/contexts/SiteSettingsContext';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import { Toaster } from '../ui/toaster';
import CatalogPage from './CatalogPage';
import CatalogHeader from './CatalogHeader';
import { Truck } from '@/models/TruckTypes';
import type { SiteSettings } from '@/types/siteSettings';

interface CatalogPageWithProviderProps {
  initialVehicles: Truck[];
  initialVehicleCount: number;
  initialSearchQuery?: string;
  siteSettings?: Partial<SiteSettings>;
}

const CatalogPageWithProvider: React.FC<CatalogPageWithProviderProps> = ({
  initialVehicles,
  initialVehicleCount,
  initialSearchQuery,
  siteSettings
}) => {
  return (
    <SiteSettingsProvider settings={siteSettings}>
      <CompareProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {/* Page Header */}
            <div className="page-header-bg page-header-text py-12">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Danh Mục Xe</h1>
                <p className="max-w-2xl mx-auto opacity-80">
                  Khám phá đầy đủ các loại xe tải, xe cẩu, sơ mi rơ mooc, xe đầu kéo từ các thương hiệu uy tín
                </p>
              </div>
            </div>

            <div className="container mx-auto px-4 py-8">
              <CatalogHeader initialVehicleCount={initialVehicleCount} />
              <CatalogPage initialVehicles={initialVehicles} initialSearchQuery={initialSearchQuery} />
            </div>
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
      </CompareProvider>
    </SiteSettingsProvider>
  );
};

export default CatalogPageWithProvider;
