
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Star } from "lucide-react";

const NearbyActivities = () => {
  const pigeonForgeActivities = [
    {
      category: "Theme Parks & Adventure",
      items: [
        {
          name: "Dollywood & Dollywood's Splash Country",
          description: "World-class rides, shows, and Southern culture."
        },
        {
          name: "The Island in Pigeon Forge",
          description: "Shops, dining, The Great Smoky Mountain Wheel, fountains, and live music."
        },
        {
          name: "TopJump Trampoline & Extreme Arena",
          description: "Fun for kids and teens."
        }
      ]
    },
    {
      category: "Shows & Experiences",
      items: [
        {
          name: "Hatfield & McCoy Dinner Feud",
          description: "Southern meal with comedy, music, and stunts."
        },
        {
          name: "Pirates Voyage Dinner & Show",
          description: "Swashbuckling family fun with acrobatics and animals."
        },
        {
          name: "Paula Deen's Lumberjack Feud",
          description: "Interactive, outdoor lumberjack competitions."
        }
      ]
    },
    {
      category: "Shopping & Misc.",
      items: [
        {
          name: "Old Mill Square",
          description: "Historic gristmill, local shops, and restaurants."
        },
        {
          name: "Alcatraz East Crime Museum",
          description: "True crime enthusiasts will love this hands-on museum."
        }
      ]
    }
  ];

  const gatlinburgActivities = [
    {
      category: "Outdoor Adventures",
      items: [
        {
          name: "Great Smoky Mountains National Park",
          description: "Hiking trails, scenic drives (Cades Cove, Roaring Fork Motor Nature Trail), waterfalls."
        },
        {
          name: "Clingmans Dome",
          description: "Highest point in the Smokies with an observation tower."
        },
        {
          name: "Anakeesta",
          description: "Aerial adventure park with gondola rides, ziplining, treetop walks, and shops."
        }
      ]
    },
    {
      category: "Attractions & Entertainment",
      items: [
        {
          name: "Ober Mountain",
          description: "Mountain coaster, skiing (in winter), and aerial tramway."
        },
        {
          name: "Ripley's Aquarium of the Smokies",
          description: "Highly rated, with a shark tunnel and penguin encounters."
        },
        {
          name: "Gatlinburg SkyPark",
          description: "Famous SkyBridge, mountain views, and glass-bottom sections."
        },
        {
          name: "Gatlinburg Space Needle",
          description: "Panoramic views and an arcade."
        },
        {
          name: "Salt & Pepper Shaker Museum",
          description: "Quirky and fun for families or rainy days."
        }
      ]
    }
  ];

  const seviervilleActivities = [
    {
      category: "Outdoor & Family Fun",
      items: [
        {
          name: "Smoky Mountain Deer Farm & Exotic Petting Zoo",
          description: "Feed and pet animals like camels, zebras, and goats."
        },
        {
          name: "Foxfire Mountain Adventure Park",
          description: "Zip lines, rope bridges, and hiking trails."
        }
      ]
    },
    {
      category: "Shopping & Local Attractions",
      items: [
        {
          name: "Tanger Outlets Sevierville",
          description: "Name-brand outlet shopping for all ages."
        },
        {
          name: "Dolly Parton Statue & Downtown Sevierville",
          description: "Great photo op and historic small-town charm."
        },
        {
          name: "RainForest Adventures Zoo",
          description: "Indoor exotic animal zoo—great for younger kids."
        }
      ]
    },
    {
      category: "Food & Spirits",
      items: [
        {
          name: "Apple Barn & Cider Mill",
          description: "Country store, bakery, wine tastings, and restaurants."
        },
        {
          name: "Sevier Distilling Co.",
          description: "Local spirits and guided tastings for adults."
        }
      ]
    }
  ];

  const rainyDayActivities = [
    "WonderWorks (Pigeon Forge)",
    "Ripley's Believe It or Not! (Gatlinburg)",
    "Indoor Mini Golf or Escape Rooms",
    "Hollywood Wax Museum (Pigeon Forge)"
  ];

  const ActivitySection = ({ title, subtitle, activities, icon }: {
    title: string;
    subtitle: string;
    activities: Array<{ category: string; items: Array<{ name: string; description: string }> }>;
    icon: string;
  }) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wide">
          {title}
        </h2>
        <p className="text-xl text-gray-600 font-light">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {activities.map((section, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900 tracking-wide">
                {section.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-amber-300 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
              NEARBY ACTIVITIES
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Explore Pigeon Forge, Gatlinburg, & Sevierville, TN: Your Ultimate Smoky Mountain Adventure Awaits!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
              Welcome to the heart of the <strong>Smoky Mountains</strong>—your perfect destination for family fun, outdoor adventures, and unforgettable experiences! Pigeon Forge, Gatlinburg, and Sevierville offer an array of exciting attractions and activities for everyone. Check out some of the top things to do during your stay!
            </p>
          </div>

          {/* Pigeon Forge Activities */}
          <ActivitySection
            title="Pigeon Forge Activities"
            subtitle="Family Fun & Entertainment Capital of the Smokies"
            activities={pigeonForgeActivities}
            icon="🎡"
          />

          {/* Gatlinburg Activities */}
          <ActivitySection
            title="Gatlinburg Activities"
            subtitle="Gateway to the Great Smoky Mountains National Park"
            activities={gatlinburgActivities}
            icon="🏔️"
          />

          {/* Sevierville Activities */}
          <ActivitySection
            title="Sevierville Activities"
            subtitle="Home of Dolly Parton and hidden local gems"
            activities={seviervilleActivities}
            icon="🌄"
          />

          {/* Rainy Day Ideas */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-4xl mb-4">🌧️</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wide">
                Rainy Day Ideas
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Indoor activities for when the weather doesn't cooperate
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rainyDayActivities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-300 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto shadow-xl bg-black text-white border-0">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6 tracking-wide">Ready to Explore?</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Your adventure in the Smoky Mountains starts at Zara's Timber Tales. Book your stay and discover all these amazing attractions just minutes from your door!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg tracking-wide"
                    onClick={() => window.open('https://calendar.google.com', '_blank')}
                  >
                    BOOK YOUR STAY
                  </button>
                  <button 
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors text-lg tracking-wide"
                    onClick={() => window.open('mailto:host@zarastimbertales.com', '_self')}
                  >
                    ASK QUESTIONS
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearbyActivities;
