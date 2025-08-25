# SEO Management System

A comprehensive SEO management system for the IOES website that allows SEO teams to manage meta data without developer intervention.

## ✨ Features

- **Azure Blob Storage Integration**: SEO data is stored in Azure Blob Storage for high performance and reliability
- **Dynamic Admin Panel**: Easy-to-use interface for managing SEO data
- **Real-time Preview**: Preview changes on live pages before saving
- **Comprehensive SEO Fields**: Supports all essential SEO meta tags including:
  - Title, Description, Keywords
  - Open Graph tags for social media
  - Twitter Card tags
  - Canonical URLs, Robot directives
  - Custom meta tags and schema markup
- **Automatic Fallbacks**: Falls back to default values when no custom data exists
- **Clean Architecture**: Redundant code removed, streamlined for performance

## 🚀 Quick Start

### 1. Access Admin Panel
1. **Login**: Visit `http://localhost:3000/admin/seo`
2. **SEO Management**: Enter admin key when prompted

Use the admin key: `ioes-seo-admin-2025-secure-key`

### 2. Managing SEO Data

#### Step-by-Step Guide (Available in Admin Panel):
1. **Select or Create Page**: Choose existing page or create new slug
2. **Fill SEO Details**: Add title, description, keywords, OG image
3. **Advanced Settings**: Configure canonical URLs, robot directives, schema
4. **Save & Preview**: Save changes and preview on live site

#### Page Slug Examples:
- **Basic Pages**: `home`, `about`, `contact`, `services`, `scholarships`
- **Country Subpages**: `study-in-uk/culture`, `study-in-canada/cost`, `study-in-usa/scholarships`

### 3. SEO Best Practices:
- **Title**: 50-60 characters, include target keywords early
- **Description**: 150-160 characters, summarize content with call-to-action
- **Keywords**: 5-10 specific long-tail keywords, avoid stuffing
- **URLs**: Use format "parent-page/subpage" for organization
- **Testing**: Validate with Google's Rich Results Test

## 🔧 Technical Implementation

### Data Storage
- **Location**: Azure Blob Storage (ioesseodata/seo-data)
- **Format**: JSON files named by page slug
- **Fallbacks**: Default SEO data when no custom data exists

### Integration Points
- `generateMetadata()` function in `/app/seo/Seo.tsx` (now uses Azure by default)
- Automatic fallback to default values from `/app/seo/seo.config.ts`
- API endpoints at `/api/seo/` for CRUD operations

## 🛠️ Environment Setup

Add these variables to `.env.local`:

```bash
# Azure Storage Configuration
AZURE_STORAGE_ACCOUNT_NAME=ioesseodata
AZURE_STORAGE_ACCOUNT_KEY=your_account_key
AZURE_STORAGE_CONTAINER_NAME=seo-data
AZURE_STORAGE_CONNECTION_STRING=your_connection_string

# Admin Authentication
SEO_ADMIN_KEY=ioes-seo-admin-2025-secure-key
```

## 🔌 API Endpoints

- `GET /api/seo` - List all pages or get specific page data
- `PUT /api/seo/[pageSlug]` - Save SEO data for a page
- `DELETE /api/seo/[pageSlug]` - Remove SEO data for a page

### Example Usage:

```bash
# Get SEO data for a page
curl "http://localhost:3000/api/seo?page=about" 
  -H "Authorization: Bearer ioes-seo-admin-2025-secure-key"

# Save SEO data
curl -X PUT "http://localhost:3000/api/seo/about" 
  -H "Authorization: Bearer ioes-seo-admin-2025-secure-key" 
  -H "Content-Type: application/json" 
  -d '{"title":"About IOES","description":"Learn about IOES..."}'
```

## 📁 File Structure

```
app/
├── seo/
│   ├── seo.config.ts          # Default SEO values (cleaned up)
│   └── Seo.tsx               # Main SEO functions with Azure integration
├── api/seo/
│   ├── route.ts              # List pages and get SEO data
│   └── [pageSlug]/route.ts   # Save/delete SEO data
└── admin/seo/
    └── page.tsx              # Admin panel page

components/admin/
└── seo-admin-panel.tsx       # Main admin interface with guide

lib/
└── azure-seo.ts             # Azure Blob Storage integration
```

## 🔮 Future Enhancements

- Additional SEO fields can be added to the `SEOData` interface
- Analytics integration for SEO performance tracking  
- Bulk import/export functionality
- SEO analysis and recommendations can be integrated
- Multi-language SEO support

## 🧹 Cleanup Completed

- ✅ Removed redundant hardcoded page data from `seo.config.ts`
- ✅ Deleted unnecessary `metadata.ts` files
- ✅ Unified SEO functions to use Azure by default
- ✅ Added comprehensive step-by-step guide in admin panel
- ✅ Streamlined code architecture for better maintainability
- ✅ Fixed async metadata generation for Next.js 13+ compatibility
- ✅ Updated all layout files to use proper async metadata functions
- ✅ Added metadataBase configuration to resolve image URLs correctly

## 🐛 Fixed Issues

- **500 Internal Server Error**: Fixed by properly implementing async metadata generation
- **Function Import Error**: Resolved by separating sync and async metadata functions
- **MetadataBase Warning**: Added proper base URL configuration for image resolution
- **Layout Compatibility**: Updated all layout files to use Next.js 13+ async metadata pattern
