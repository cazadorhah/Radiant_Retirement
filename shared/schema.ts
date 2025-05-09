import { pgTable, text, serial, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  state: text("state").notNull(),
  population: integer("population").notNull(),
});

export const facilities = pgTable("facilities", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  phone: text("phone").notNull(),
  website: text("website").notNull(),
  rating: real("rating").notNull(),
  reviewCount: integer("review_count").notNull(),
  amenities: text("amenities").array().notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertCitySchema = createInsertSchema(cities).pick({
  name: true,
  state: true,
  population: true,
});

export const insertFacilitySchema = createInsertSchema(facilities);

export type InsertCity = z.infer<typeof insertCitySchema>;
export type City = typeof cities.$inferSelect;
export type Facility = typeof facilities.$inferSelect;
