export type ProductCategory = "tralis" | "pagar" | "kanopi" | "railing" | "pintu";

export interface PortfolioItem {
  id: string;
  title: string;
  category: ProductCategory;
  categoryName: string;
  client: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
  specifications: string[];
  estimatedCost?: string;
  rating: number;
  clientReview?: string;
  featured: boolean;
  createdAt: string;
}
