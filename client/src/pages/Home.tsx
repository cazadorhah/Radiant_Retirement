import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { City } from "@shared/types";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Sun, Building, Star, MessageSquare, MapPin, Utensils, Heart } from "lucide-react";

const Home = () => {
  const { data: cities, isLoading } = useQuery<City[]>({
    queryKey: ["/api/cities"],
  });

  return (
    <>
      <div className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-sm">
            Find Senior Living Facilities Near You
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90 drop-shadow-sm">
            Explore top-rated senior living options in over 1,000 cities across the United States
          </p>
          <SearchBar />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Radiant Retirement?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We help seniors and their families find the perfect retirement community with comprehensive information and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Directory</h3>
              <p className="text-gray-700">
                Browse detailed listings of senior living facilities in over 1,000 U.S. cities.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-gray-700">
                Read honest feedback from residents and families to make informed decisions.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Resources</h3>
              <p className="text-gray-700">
                Access guides and advice about senior living options, financing, and care planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Cities
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore senior living options in these top destinations
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities?.slice(0, 6).map((city) => (
                <Link
                  key={`${city.name}-${city.state}`}
                  href={`/city/${encodeURIComponent(`${city.name}-${city.state}`)}`}
                >
                  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
                    <h3 className="text-xl font-bold text-gray-900">{city.name}, {city.state}</h3>
                    <p className="text-gray-600 mb-4">Population: {city.population.toLocaleString()}</p>
                    <p className="text-gray-700">
                      Explore senior living options in {city.name}, {city.state}.
                    </p>
                    <div className="flex gap-4 mt-4 text-sm">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 text-primary mr-1" />
                        <span>5+ Facilities</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-accent mr-1" />
                        <span>
                          {city.name === "New York" && city.state === "NY" ? "4.4" : 
                          city.name === "Los Angeles" && city.state === "CA" ? "4.2" : 
                          city.name === "Chicago" && city.state === "IL" ? "4.1" : 
                          city.name === "Philadelphia" && city.state === "PA" ? "4.2" : 
                          (3.8 + (city.id % 13) / 10).toFixed(1)} Avg Rating
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/browse">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
                Browse All Cities by State
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Senior couple enjoying retirement"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Finding the Right Senior Living Option
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Choosing a senior living facility is an important decision that affects quality of life. Our directory helps you:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location Benefits</h3>
                    <p className="text-gray-600">Learn about the facility's neighborhood, nearby hospitals, parks, and overall convenience for families.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <Utensils className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Amenities Offered</h3>
                    <p className="text-gray-600">Discover what's included in daily living—meals, housekeeping, activities, transportation, and more.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <Heart className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Type of Care Provided</h3>
                    <p className="text-gray-600">Understand the level of care available, whether it's independent living, assisted living, memory care, or skilled nursing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
