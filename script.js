// Add your 100 terms in this array
const glossaryData = [
{
    term: "GIS",
    en: "A system used to collect, store, analyze, and display location-based data.",
    hi: "एक सिस्टम जो स्थान (Location) से जुड़े डेटा को एकत्र, स्टोर, विश्लेषण और प्रदर्शित करता है।"
},
{
    term: "Remote Sensing",
    en: "Collecting information about the Earth's surface without touching it using satellites or aircraft.",
    hi: "उपग्रह या विमान की मदद से बिना सीधे संपर्क किए पृथ्वी की सतह की जानकारी प्राप्त करना।"
},
{
    term: "GPS",
    en: "A satellite-based system used to find accurate locations anywhere on Earth.",
    hi: "पृथ्वी पर किसी भी स्थान की सटीक स्थिति बताने वाली उपग्रह आधारित प्रणाली।"
},
{
    term: "GNSS",
    en: "A group of satellite systems used for global positioning and navigation.",
    hi: "वैश्विक स्थिति और नेविगेशन के लिए उपयोग की जाने वाली उपग्रह प्रणालियों का समूह।"
},
{
    term: "Drone (UAV)",
    en: "A flying machine without a pilot used for mapping and surveying.",
    hi: "बिना पायलट का उड़ने वाला विमान जिसका उपयोग मैपिंग और सर्वेक्षण में किया जाता है।"
},
{
    term: "Python",
    en: "A programming language used to automate GIS tasks.",
    hi: "GIS कार्यों को ऑटोमेट करने के लिए उपयोग की जाने वाली प्रोग्रामिंग भाषा।"
},
{
    term: "Google Earth Engine",
    en: "A cloud platform for analyzing satellite images.",
    hi: "सैटेलाइट इमेज का विश्लेषण करने वाला क्लाउड प्लेटफॉर्म।"
},
{
    term: "Raster",
    en: "Data made of pixels, commonly used for satellite images.",
    hi: "पिक्सेल से बना डेटा, जिसका उपयोग सैटेलाइट इमेज में होता है।"
},
{
    term: "Vector",
    en: "Data represented by points, lines, and polygons.",
    hi: "बिंदु, रेखा और बहुभुज के रूप में दर्शाया गया डेटा।"
},
{
    term: "Point",
    en: "A single location on a map.",
    hi: "मानचित्र पर एक स्थान।"
},
{
    term: "Line",
    en: "A feature representing roads, rivers, or boundaries.",
    hi: "सड़क, नदी या सीमा जैसी रेखीय वस्तु।"
},
{
    term: "Polygon",
    en: "A closed shape representing an area.",
    hi: "किसी क्षेत्र को दर्शाने वाली बंद आकृति।"
},
{
    term: "Coordinate",
    en: "Numbers that define a location.",
    hi: "किसी स्थान की स्थिति बताने वाले अंक।"
},
{
    term: "Latitude",
    en: "Measures north or south position.",
    hi: "उत्तर या दक्षिण दिशा की स्थिति।"
},
{
    term: "Longitude",
    en: "Measures east or west position.",
    hi: "पूर्व या पश्चिम दिशा की स्थिति।"
},
{
    term: "Projection",
    en: "A method to display Earth's curved surface on a flat map.",
    hi: "पृथ्वी की गोल सतह को समतल मानचित्र पर दिखाने की विधि।"
},
{
    term: "Datum",
    en: "A reference model for measuring locations.",
    hi: "स्थान मापने का संदर्भ मॉडल।"
},
{
    term: "UTM",
    en: "A coordinate system used for accurate mapping.",
    hi: "सटीक मैपिंग के लिए उपयोग की जाने वाली निर्देशांक प्रणाली।"
},
{
    term: "Scale",
    en: "The relationship between map distance and real distance.",
    hi: "मानचित्र और वास्तविक दूरी का अनुपात।"
},
{
    term: "Map",
    en: "A visual representation of an area.",
    hi: "किसी क्षेत्र का चित्रात्मक प्रदर्शन।"
},
{
    term: "Basemap",
    en: "The background map used for reference.",
    hi: "संदर्भ के लिए उपयोग किया जाने वाला आधार मानचित्र।"
},
{
    term: "Layer",
    en: "A collection of similar geographic data.",
    hi: "एक जैसे भौगोलिक डेटा का समूह।"
},
{
    term: "Attribute",
    en: "Information describing a geographic feature.",
    hi: "भौगोलिक वस्तु का विवरण।"
},
{
    term: "Attribute Table",
    en: "A table containing information about map features.",
    hi: "मैप फीचर्स की जानकारी वाली तालिका।"
},
{
    term: "Feature",
    en: "Any object shown on a map.",
    hi: "मानचित्र पर दिखाई गई कोई भी वस्तु।"
},
{
    term: "Feature Class",
    en: "A collection of similar geographic features.",
    hi: "एक जैसे फीचर्स का संग्रह।"
},
{
    term: "Geodatabase",
    en: "A database for storing GIS data.",
    hi: "GIS डेटा को संग्रहित करने वाला डेटाबेस।"
},
{
    term: "Shapefile",
    en: "A popular GIS file format for vector data.",
    hi: "वेक्टर डेटा के लिए लोकप्रिय GIS फ़ाइल प्रारूप।"
},
{
    term: "GeoJSON",
    en: "A format for storing geographic data in JSON.",
    hi: "JSON में भौगोलिक डेटा रखने का प्रारूप।"
},
{
    term: "KML",
    en: "A file format used in Google Earth.",
    hi: "Google Earth में उपयोग होने वाला फ़ाइल प्रारूप।"
},
{
    term: "GeoTIFF",
    en: "A raster image with location information.",
    hi: "स्थान जानकारी वाली रास्टर इमेज।"
},
{
    term: "DEM",
    en: "A digital model showing ground elevation.",
    hi: "भूमि की ऊँचाई दर्शाने वाला डिजिटल मॉडल।"
},
{
    term: "DSM",
    en: "A surface model including trees and buildings.",
    hi: "पेड़ और भवन सहित सतह का डिजिटल मॉडल।"
},
{
    term: "DTM",
    en: "A model representing bare ground.",
    hi: "केवल भूमि की सतह का डिजिटल मॉडल।"
},
{
    term: "Elevation",
    en: "Height above sea level.",
    hi: "समुद्र तल से ऊँचाई।"
},
{
    term: "Slope",
    en: "The steepness of the land.",
    hi: "भूमि का ढाल।"
},
{
    term: "Aspect",
    en: "The direction a slope faces.",
    hi: "ढाल किस दिशा में है।"
},
{
    term: "Hillshade",
    en: "A shaded view of terrain.",
    hi: "भूभाग का छायांकित दृश्य।"
},
{
    term: "Contour",
    en: "Lines connecting equal elevations.",
    hi: "समान ऊँचाई वाले बिंदुओं को जोड़ने वाली रेखाएँ।"
},
{
    term: "Buffer",
    en: "An area created around a feature.",
    hi: "किसी फीचर के चारों ओर बनाया गया क्षेत्र।"
},
{
    term: "Clip",
    en: "Cuts data using a boundary.",
    hi: "सीमा के अनुसार डेटा काटना।"
},
{
    term: "Merge",
    en: "Combines multiple datasets into one.",
    hi: "कई डेटा को एक में जोड़ना।"
},
{
    term: "Union",
    en: "Combines overlapping polygons.",
    hi: "ओवरलैप होने वाले पॉलीगॉन को जोड़ना।"
},
{
    term: "Intersect",
    en: "Keeps only common overlapping areas.",
    hi: "केवल समान ओवरलैप क्षेत्र रखना।"
},
{
    term: "Dissolve",
    en: "Removes shared boundaries.",
    hi: "समान सीमाओं को हटाना।"
},
{
    term: "Spatial Join",
    en: "Joins data based on location.",
    hi: "स्थान के आधार पर डेटा जोड़ना।"
},
{
    term: "Georeferencing",
    en: "Assigning real-world coordinates to an image.",
    hi: "इमेज को वास्तविक निर्देशांक देना।"
},
{
    term: "Digitizing",
    en: "Creating map features from images.",
    hi: "इमेज से फीचर बनाना।"
},
{
    term: "Topology",
    en: "Rules that define relationships between features.",
    hi: "फीचर्स के बीच संबंधों के नियम।"
},
{
    term: "Overlay",
    en: "Combining multiple map layers.",
    hi: "कई लेयरों को एक साथ जोड़ना।"
},
{
    term: "Spatial Analysis",
    en: "Studying geographic patterns and relationships.",
    hi: "भौगोलिक पैटर्न और संबंधों का अध्ययन।"
},
{
    term: "Interpolation",
    en: "Estimating unknown values between points.",
    hi: "बिंदुओं के बीच अज्ञात मान का अनुमान लगाना।"
},
{
    term: "IDW",
    en: "An interpolation method using nearby values.",
    hi: "निकटतम मानों से अनुमान लगाने की विधि।"
},
{
    term: "Kriging",
    en: "An advanced interpolation technique.",
    hi: "उन्नत इंटरपोलेशन तकनीक।"
},
{
    term: "Network Analysis",
    en: "Finding the best routes in a network.",
    hi: "नेटवर्क में सबसे अच्छा मार्ग ढूंढना।"
},
{
    term: "Shortest Path",
    en: "The quickest route between two places.",
    hi: "दो स्थानों के बीच सबसे छोटा मार्ग।"
},
{
    term: "Geocoding",
    en: "Converting addresses into coordinates.",
    hi: "पते को निर्देशांक में बदलना।"
},
{
    term: "Reverse Geocoding",
    en: "Converting coordinates into an address.",
    hi: "निर्देशांक को पते में बदलना।"
},
{
    term: "Pixel",
    en: "The smallest unit of a raster image.",
    hi: "रास्टर इमेज की सबसे छोटी इकाई।"
},
{
    term: "Resolution",
    en: "The size of each pixel on the ground.",
    hi: "जमीन पर प्रत्येक पिक्सेल का आकार।"
},
{
    term: "Spatial Resolution",
    en: "Level of detail in an image.",
    hi: "इमेज में विवरण का स्तर।"
},
{
    term: "Temporal Resolution",
    en: "How often images are captured.",
    hi: "कितनी बार इमेज ली जाती है।"
},
{
    term: "Spectral Resolution",
    en: "Number of wavelength bands recorded.",
    hi: "रिकॉर्ड किए गए स्पेक्ट्रल बैंड की संख्या।"
},
{
    term: "NDVI",
    en: "An index used to measure vegetation health.",
    hi: "वनस्पति की स्थिति मापने वाला सूचकांक।"
},
{
    term: "NDWI",
    en: "An index used to detect water bodies.",
    hi: "जल निकायों की पहचान करने वाला सूचकांक।"
},
{
    term: "NDBI",
    en: "An index used to identify built-up areas.",
    hi: "निर्मित क्षेत्रों की पहचान करने वाला सूचकांक।"
},
{
    term: "LULC",
    en: "Land Use and Land Cover classification.",
    hi: "भूमि उपयोग और भूमि आवरण वर्गीकरण।"
},
{
    term: "Classification",
    en: "Grouping pixels into different categories.",
    hi: "पिक्सेल को अलग-अलग वर्गों में बांटना।"
},
{
    term: "Supervised Classification",
    en: "Classification using training samples.",
    hi: "प्रशिक्षण नमूनों के आधार पर वर्गीकरण।"
},
{
    term: "Unsupervised Classification",
    en: "Automatic classification without training data.",
    hi: "बिना प्रशिक्षण डेटा के स्वचालित वर्गीकरण।"
},
{
    term: "Accuracy Assessment",
    en: "Checking how correct a classification is.",
    hi: "वर्गीकरण की शुद्धता की जांच।"
},
{
    term: "Ground Truth",
    en: "Actual field data used for verification.",
    hi: "सत्यापन के लिए वास्तविक फील्ड डेटा।"
},
{
    term: "Survey",
    en: "Collecting field information.",
    hi: "फील्ड से जानकारी एकत्र करना।"
},
{
    term: "Photogrammetry",
    en: "Creating measurements from photographs.",
    hi: "फोटो से माप और मानचित्र बनाना।"
},
{
    term: "LiDAR",
    en: "A laser-based technology for measuring distances.",
    hi: "लेजर आधारित दूरी मापने की तकनीक।"
},
{
    term: "Orthomosaic",
    en: "A corrected aerial image made from many photos.",
    hi: "कई फोटो जोड़कर बनाई गई सही एरियल इमेज।"
},
{
    term: "GCP",
    en: "Ground points used to improve map accuracy.",
    hi: "मैप की सटीकता बढ़ाने वाले ग्राउंड पॉइंट।"
},
{
    term: "RTK",
    en: "A GPS method for centimeter-level accuracy.",
    hi: "सेंटीमीटर स्तर की सटीकता देने वाली GPS तकनीक।"
},
{
    term: "Waypoint",
    en: "A planned location for navigation.",
    hi: "नेविगेशन के लिए निर्धारित स्थान।"
},
{
    term: "Mission Planning",
    en: "Planning the flight path of a drone.",
    hi: "ड्रोन की उड़ान का मार्ग तय करना।"
},
{
    term: "Cloud Computing",
    en: "Using online servers for data processing.",
    hi: "ऑनलाइन सर्वर पर डेटा प्रोसेस करना।"
},
{
    term: "ArcGIS",
    en: "A popular GIS software by Esri.",
    hi: "Esri द्वारा विकसित लोकप्रिय GIS सॉफ्टवेयर।"
},
{
    term: "QGIS",
    en: "A free and open-source GIS software.",
    hi: "मुफ्त और ओपन-सोर्स GIS सॉफ्टवेयर।"
},
{
    term: "GeoServer",
    en: "Software for sharing GIS data online.",
    hi: "GIS डेटा ऑनलाइन साझा करने वाला सॉफ्टवेयर।"
},
{
    term: "WebGIS",
    en: "GIS available through a web browser.",
    hi: "वेब ब्राउज़र के माध्यम से उपयोग होने वाला GIS।"
},
{
    term: "Cloud GIS",
    en: "GIS services running on cloud platforms.",
    hi: "क्लाउड पर चलने वाली GIS सेवाएं।"
},
{
    term: "SQL",
    en: "A language for managing databases.",
    hi: "डेटाबेस को प्रबंधित करने की भाषा।"
},
{
    term: "PostGIS",
    en: "A spatial extension for PostgreSQL.",
    hi: "PostgreSQL का स्थानिक एक्सटेंशन।"
},
{
    term: "GeoAI",
    en: "Using Artificial Intelligence with GIS.",
    hi: "GIS के साथ कृत्रिम बुद्धिमत्ता का उपयोग।"
},
{
    term: "Satellite",
    en: "An object orbiting Earth to capture images.",
    hi: "पृथ्वी की परिक्रमा कर इमेज लेने वाला उपग्रह।"
},
{
    term: "Landsat",
    en: "A satellite program for Earth observation.",
    hi: "पृथ्वी अवलोकन के लिए उपग्रह कार्यक्रम।"
},
{
    term: "Sentinel",
    en: "European satellites for Earth monitoring.",
    hi: "पृथ्वी निगरानी के लिए यूरोपीय उपग्रह।"
},
{
    term: "Band",
    en: "A specific range of light recorded by a sensor.",
    hi: "सेंसर द्वारा रिकॉर्ड की गई प्रकाश की एक विशेष सीमा।"
},
{
    term: "Metadata",
    en: "Information describing a dataset.",
    hi: "डेटा के बारे में जानकारी।"
},
{
    term: "Coordinate System",
    en: "A system used to define map locations.",
    hi: "मानचित्र पर स्थान निर्धारित करने की प्रणाली।"
},
{
    term: "Map Layout",
    en: "The final design of a map for printing.",
    hi: "प्रिंट के लिए तैयार मानचित्र का डिज़ाइन।"
},
{
    term: "Legend",
    en: "Explains map symbols.",
    hi: "मानचित्र के चिन्हों का विवरण।"
},
{
    term: "North Arrow",
    en: "Shows the north direction on a map.",
    hi: "मानचित्र पर उत्तर दिशा दिखाता है।"
},
{
    term: "Scale Bar",
    en: "Shows distance on a map.",
    hi: "मानचित्र पर दूरी दर्शाता है।"
},
{
    term: "Symbology",
    en: "The style used to display map features.",
    hi: "मानचित्र फीचर्स को दिखाने की शैली।"
},
{
    term: "Dashboard",
    en: "A visual display of GIS information.",
    hi: "GIS जानकारी दिखाने वाला विजुअल पैनल।"
},
{
    term: "Story Map",
    en: "A map combined with text, photos, and videos.",
    hi: "मैप, टेक्स्ट, फोटो और वीडियो का संयोजन।"
},
{
    term: "Spatial Database",
    en: "A database designed for geographic data.",
    hi: "भौगोलिक डेटा के लिए बनाया गया डेटाबेस।"
},
{
    term: "Map Service",
    en: "A service that shares maps online.",
    hi: "ऑनलाइन मानचित्र साझा करने वाली सेवा।"
},
{
    term: "OpenStreetMap",
    en: "A free editable map of the world.",
    hi: "दुनिया का मुफ्त संपादन योग्य मानचित्र।"
},



{
    term: "Spatial Index",
    en: "A technique that speeds up searching geographic data.",
    hi: "भौगोलिक डेटा को तेजी से खोजने की तकनीक।"
},
{
    term: "Geoprocessing",
    en: "Performing GIS tools to create or modify spatial data.",
    hi: "स्थानिक डेटा बनाने या बदलने के लिए GIS टूल्स का उपयोग।"
},
{
    term: "Map Algebra",
    en: "Using mathematical operations on raster layers.",
    hi: "रास्टर लेयर पर गणितीय गणनाएँ करना।"
},
{
    term: "Raster Calculator",
    en: "A tool used to calculate values in raster datasets.",
    hi: "रास्टर डेटा पर गणना करने वाला टूल।"
},
{
    term: "Cell Size",
    en: "The ground area represented by one raster pixel.",
    hi: "एक रास्टर पिक्सेल द्वारा दर्शाया गया वास्तविक क्षेत्र।"
},
{
    term: "NoData",
    en: "Cells that contain no valid information.",
    hi: "ऐसे सेल जिनमें कोई मान्य डेटा नहीं होता।"
},
{
    term: "Resampling",
    en: "Changing the pixel size of raster data.",
    hi: "रास्टर के पिक्सेल आकार को बदलना।"
},
{
    term: "Nearest Neighbor",
    en: "A resampling method that keeps original pixel values.",
    hi: "रिसैम्पलिंग की विधि जो मूल पिक्सेल मान बनाए रखती है।"
},
{
    term: "Bilinear Interpolation",
    en: "A resampling method that averages nearby pixels.",
    hi: "आस-पास के पिक्सेल का औसत निकालने वाली रिसैम्पलिंग विधि।"
},
{
    term: "Cubic Convolution",
    en: "A resampling method that produces smoother images.",
    hi: "रिसैम्पलिंग की विधि जो अधिक स्मूद इमेज बनाती है।"
},
{
    term: "Mosaic",
    en: "Combining multiple raster images into one.",
    hi: "कई रास्टर इमेज को जोड़कर एक बनाना।"
},
{
    term: "Mosaic Dataset",
    en: "A collection of rasters managed as one dataset.",
    hi: "कई रास्टर का एक संयुक्त संग्रह।"
},
{
    term: "Tile",
    en: "A small section of a large map or image.",
    hi: "बड़े मानचित्र या इमेज का छोटा भाग।"
},
{
    term: "Tile Cache",
    en: "Pre-generated map tiles for faster loading.",
    hi: "तेजी से लोड होने के लिए पहले से तैयार किए गए मैप टाइल।"
},
{
    term: "Pyramid",
    en: "Lower-resolution copies of raster for faster display.",
    hi: "रास्टर की कम रिज़ॉल्यूशन प्रतियां जो तेजी से दिखाई जाती हैं।"
},
{
    term: "Histogram",
    en: "A graph showing pixel value distribution.",
    hi: "पिक्सेल मानों का वितरण दिखाने वाला ग्राफ।"
},
{
    term: "Stretch",
    en: "Improving image contrast for better viewing.",
    hi: "इमेज का कॉन्ट्रास्ट बढ़ाकर उसे स्पष्ट बनाना।"
},
{
    term: "Contrast",
    en: "Difference between light and dark areas.",
    hi: "हल्के और गहरे भागों के बीच का अंतर।"
},
{
    term: "Brightness",
    en: "Overall lightness of an image.",
    hi: "इमेज की कुल चमक।"
},
{
    term: "False Color Composite",
    en: "An image created using non-natural color bands.",
    hi: "प्राकृतिक रंगों के बजाय अन्य बैंड से बनी इमेज।"
},
{
    term: "True Color Composite",
    en: "An image displayed using natural colors.",
    hi: "प्राकृतिक रंगों में दिखाई गई इमेज।"
},
{
    term: "Band Combination",
    en: "Selecting bands to create different image views.",
    hi: "विभिन्न दृश्य बनाने के लिए बैंड का चयन।"
},
{
    term: "Radiometric Resolution",
    en: "Ability of a sensor to detect small brightness differences.",
    hi: "सेंसर की छोटी चमक के अंतर पहचानने की क्षमता।"
},
{
    term: "Radiometric Correction",
    en: "Removing sensor-related image errors.",
    hi: "सेंसर से संबंधित त्रुटियों को हटाना।"
},
{
    term: "Atmospheric Correction",
    en: "Removing atmospheric effects from satellite images.",
    hi: "वायुमंडलीय प्रभाव हटाकर इमेज को साफ करना।"
},
{
    term: "Cloud Mask",
    en: "A method to remove clouds from satellite images.",
    hi: "सैटेलाइट इमेज से बादलों को हटाने की तकनीक।"
},
{
    term: "Shadow Mask",
    en: "Identifying shadow areas in images.",
    hi: "इमेज में छाया वाले क्षेत्रों की पहचान।"
},
{
    term: "Scene",
    en: "A single satellite image captured at one time.",
    hi: "एक समय पर ली गई सैटेलाइट इमेज।"
},
{
    term: "Swath",
    en: "The width of Earth's surface captured by a satellite.",
    hi: "सैटेलाइट द्वारा एक बार में कवर किया गया क्षेत्र।"
},
{
    term: "Orbit",
    en: "The path followed by a satellite around Earth.",
    hi: "पृथ्वी के चारों ओर उपग्रह का मार्ग।"
},
{
    term: "Sun-Synchronous Orbit",
    en: "An orbit where the satellite passes at the same local time.",
    hi: "ऐसी कक्षा जिसमें उपग्रह हर बार लगभग एक ही स्थानीय समय पर गुजरता है।"
},
{
    term: "Revisit Time",
    en: "Time taken by a satellite to image the same place again.",
    hi: "उसी स्थान की दोबारा इमेज लेने में लगने वाला समय।"
},
{
    term: "Ground Resolution",
    en: "The smallest object visible in an image.",
    hi: "इमेज में दिखाई देने वाली सबसे छोटी वस्तु का आकार।"
},
{
    term: "Footprint",
    en: "The area covered by a sensor or image.",
    hi: "सेंसर या इमेज द्वारा कवर किया गया क्षेत्र।"
},
{
    term: "Footprint Polygon",
    en: "A polygon showing image coverage.",
    hi: "इमेज के कवर क्षेत्र को दर्शाने वाला पॉलीगॉन।"
},
{
    term: "Image Footprint",
    en: "The boundary of a satellite image.",
    hi: "सैटेलाइट इमेज की सीमा।"
},
{
    term: "Ground Sampling Distance (GSD)",
    en: "Distance on the ground represented by one pixel.",
    hi: "जमीन पर एक पिक्सेल द्वारा दर्शाई गई दूरी।"
},
{
    term: "Orthorectification",
    en: "Correcting image distortion using terrain information.",
    hi: "भूभाग की जानकारी से इमेज विकृति को ठीक करना।"
},
{
    term: "Image Registration",
    en: "Aligning two or more images accurately.",
    hi: "दो या अधिक इमेज को सही तरीके से मिलाना।"
},
{
    term: "Image Enhancement",
    en: "Improving image quality for better interpretation.",
    hi: "बेहतर विश्लेषण के लिए इमेज की गुणवत्ता बढ़ाना।"
},
{
    term: "Image Classification",
    en: "Assigning pixels into land cover categories.",
    hi: "पिक्सेल को विभिन्न भूमि आवरण वर्गों में बाँटना।"
},
{
    term: "Segmentation",
    en: "Dividing an image into meaningful regions.",
    hi: "इमेज को उपयोगी भागों में विभाजित करना।"
},
{
    term: "Object-Based Analysis",
    en: "Analyzing groups of pixels as objects instead of individual pixels.",
    hi: "अलग-अलग पिक्सेल के बजाय वस्तुओं के रूप में विश्लेषण करना।"
},
{
    term: "Region Growing",
    en: "Grouping neighboring pixels with similar values.",
    hi: "समान मान वाले पड़ोसी पिक्सेल को एक समूह बनाना।"
},
{
    term: "Thresholding",
    en: "Separating pixels using a selected value.",
    hi: "एक निश्चित मान के आधार पर पिक्सेल अलग करना।"
},
{
    term: "Edge Detection",
    en: "Finding object boundaries in an image.",
    hi: "इमेज में वस्तुओं की सीमाओं की पहचान करना।"
},
{
    term: "Sharpening",
    en: "Making image details clearer.",
    hi: "इमेज के विवरण को अधिक स्पष्ट बनाना।"
},
{
    term: "Filtering",
    en: "Removing noise or enhancing image features.",
    hi: "अनचाहे शोर को हटाना या इमेज को बेहतर बनाना।"
},
{
    term: "Noise",
    en: "Unwanted random variation in image data.",
    hi: "इमेज में अनचाहा बदलाव या विकृति।"
},
{
    term: "Kernel",
    en: "A small matrix used for image filtering.",
    hi: "इमेज फ़िल्टरिंग में उपयोग होने वाला छोटा मैट्रिक्स।"
},
{
    term: "Convolution",
    en: "Applying a kernel to process image pixels.",
    hi: "इमेज प्रोसेसिंग के लिए कर्नेल का उपयोग करना।"
},
{
    term: "TIN",
    en: "A terrain model made using connected triangles.",
    hi: "त्रिभुजों से बना डिजिटल भू-भाग मॉडल।"
},
{
    term: "Node",
    en: "A point where two or more lines meet.",
    hi: "वह बिंदु जहाँ दो या अधिक रेखाएँ मिलती हैं।"
},
{
    term: "Vertex",
    en: "A point that defines the shape of a line or polygon.",
    hi: "रेखा या पॉलीगॉन का आकार निर्धारित करने वाला बिंदु।"
},
{
    term: "Multipart Feature",
    en: "A single feature made of multiple separate parts.",
    hi: "एक फीचर जो कई अलग-अलग भागों से मिलकर बना हो।"
},
{
    term: "Singlepart Feature",
    en: "A feature that contains only one geometry.",
    hi: "ऐसा फीचर जिसमें केवल एक ज्यामिति हो।"
},
{
    term: "Multipart To Singlepart",
    en: "A tool that separates multipart features.",
    hi: "मल्टीपार्ट फीचर को अलग-अलग फीचर में बदलने वाला टूल।"
},
{
    term: "Centroid",
    en: "The center point of a polygon.",
    hi: "पॉलीगॉन का केंद्रीय बिंदु।"
},
{
    term: "Extent",
    en: "The total area covered by a dataset.",
    hi: "डेटासेट द्वारा कवर किया गया कुल क्षेत्र।"
},
{
    term: "Bounding Box",
    en: "The smallest rectangle surrounding a feature.",
    hi: "किसी फीचर को घेरने वाला सबसे छोटा आयत।"
},
{
    term: "Envelope",
    en: "The minimum rectangle covering all map features.",
    hi: "सभी फीचर्स को घेरने वाला न्यूनतम आयत।"
},
{
    term: "Snap",
    en: "Automatically connecting nearby map features.",
    hi: "पास के फीचर्स को स्वतः जोड़ना।"
},
{
    term: "Snapping Tolerance",
    en: "The maximum distance for snapping features.",
    hi: "स्नैप होने की अधिकतम दूरी।"
},
{
    term: "Editing",
    en: "Adding, deleting, or modifying GIS features.",
    hi: "GIS फीचर्स को जोड़ना, हटाना या बदलना।"
},
{
    term: "Edit Session",
    en: "The period during which map editing is performed.",
    hi: "वह समय जिसमें मैप एडिटिंग की जाती है।"
},
{
    term: "Vertex Editing",
    en: "Changing the vertices of a feature.",
    hi: "फीचर के वर्टेक्स को बदलना।"
},
{
    term: "Split",
    en: "Dividing one feature into multiple features.",
    hi: "एक फीचर को कई भागों में बाँटना।"
},
{
    term: "Append",
    en: "Adding one dataset into another.",
    hi: "एक डेटासेट को दूसरे में जोड़ना।"
},
{
    term: "Erase",
    en: "Removing areas using another polygon.",
    hi: "दूसरे पॉलीगॉन की सहायता से क्षेत्र हटाना।"
},
{
    term: "Identity",
    en: "Adding attributes from overlapping features.",
    hi: "ओवरलैप होने वाले फीचर्स की जानकारी जोड़ना।"
},
{
    term: "Symmetric Difference",
    en: "Keeping areas that do not overlap.",
    hi: "केवल गैर-ओवरलैप क्षेत्रों को रखना।"
},
{
    term: "Spatial Query",
    en: "Finding features based on their location.",
    hi: "स्थान के आधार पर फीचर्स को खोजना।"
},
{
    term: "Attribute Query",
    en: "Finding features using attribute values.",
    hi: "एट्रिब्यूट मान के आधार पर फीचर्स खोजना।"
},
{
    term: "SQL Expression",
    en: "A statement used to filter GIS data.",
    hi: "GIS डेटा को फ़िल्टर करने के लिए SQL कथन।"
},
{
    term: "Selection Set",
    en: "A group of selected map features.",
    hi: "चयनित मैप फीचर्स का समूह।"
},
{
    term: "Definition Query",
    en: "Displaying only features that match a condition.",
    hi: "केवल निर्धारित शर्त पूरी करने वाले फीचर्स दिखाना।"
},




{
    term: "Map Scale Factor",
    en: "A value used to improve measurement accuracy on maps.",
    hi: "मानचित्र पर माप की शुद्धता बढ़ाने के लिए उपयोग किया जाने वाला मान।"
},
{
    term: "Cartography",
    en: "The science and art of making maps.",
    hi: "मानचित्र बनाने का विज्ञान और कला।"
},
{
    term: "Map Symbol",
    en: "A sign used to represent a real-world feature.",
    hi: "वास्तविक वस्तु को दर्शाने वाला मानचित्र चिन्ह।"
},
{
    term: "Reference Map",
    en: "A map that shows the location of geographic features.",
    hi: "भौगोलिक विशेषताओं का स्थान दिखाने वाला मानचित्र।"
},
{
    term: "Thematic Map",
    en: "A map showing one specific topic or theme.",
    hi: "किसी एक विशेष विषय को दर्शाने वाला मानचित्र।"
},
{
    term: "Choropleth Map",
    en: "A map using colors to show data values by area.",
    hi: "क्षेत्र के अनुसार रंगों से डेटा दिखाने वाला मानचित्र।"
},
{
    term: "Dot Density Map",
    en: "A map using dots to represent data distribution.",
    hi: "बिंदुओं से डेटा का वितरण दिखाने वाला मानचित्र।"
},
{
    term: "Graduated Symbol Map",
    en: "A map using different symbol sizes for values.",
    hi: "अलग-अलग आकार के चिन्हों से डेटा दिखाने वाला मानचित्र।"
},
{
    term: "Proportional Symbol Map",
    en: "A map where symbol size matches data values.",
    hi: "मान के अनुसार चिन्ह का आकार बदलने वाला मानचित्र।"
},
{
    term: "Isoline Map",
    en: "A map connecting points with equal values.",
    hi: "समान मान वाले बिंदुओं को जोड़ने वाला मानचित्र।"
},
{
    term: "Isopleth",
    en: "A line joining locations with equal measurements.",
    hi: "समान माप वाले स्थानों को जोड़ने वाली रेखा।"
},
{
    term: "Cartographic Generalization",
    en: "Simplifying map details for better readability.",
    hi: "मानचित्र को स्पष्ट बनाने के लिए विवरण सरल करना।"
},
{
    term: "Generalization",
    en: "Reducing unnecessary map details.",
    hi: "अनावश्यक मानचित्र विवरण कम करना।"
},
{
    term: "Simplify Polygon",
    en: "Reducing polygon complexity while keeping its shape.",
    hi: "आकार बनाए रखते हुए पॉलीगॉन को सरल बनाना।"
},
{
    term: "Smooth Line",
    en: "Making a line less sharp and more natural.",
    hi: "रेखा को अधिक मुलायम और प्राकृतिक बनाना।"
},
{
    term: "Label",
    en: "Text used to identify a map feature.",
    hi: "मानचित्र फीचर की पहचान के लिए लिखा गया नाम।"
},
{
    term: "Annotation",
    en: "Text stored as a map feature.",
    hi: "मानचित्र फीचर के रूप में संग्रहीत टेक्स्ट।"
},
{
    term: "Callout",
    en: "A label connected to a feature with a leader line.",
    hi: "रेखा द्वारा फीचर से जुड़ा हुआ लेबल।"
},
{
    term: "Inset Map",
    en: "A small map showing additional location details.",
    hi: "अतिरिक्त स्थान जानकारी दिखाने वाला छोटा मानचित्र।"
},
{
    term: "Locator Map",
    en: "A map showing where the main map is located.",
    hi: "मुख्य मानचित्र का स्थान दिखाने वाला छोटा मानचित्र।"
},
{
    term: "Neatline",
    en: "The border drawn around a map.",
    hi: "मानचित्र के चारों ओर बनाई गई सीमा रेखा।"
},
{
    term: "Map Grid",
    en: "A network of lines used for map referencing.",
    hi: "मानचित्र में स्थान पहचानने के लिए रेखाओं का जाल।"
},
{
    term: "Graticule",
    en: "Lines of latitude and longitude shown on a map.",
    hi: "मानचित्र पर अक्षांश और देशांतर की रेखाएँ।"
},
{
    term: "Map Frame",
    en: "The area where the map is displayed in a layout.",
    hi: "लेआउट में मानचित्र दिखाने का निर्धारित क्षेत्र।"
},
{
    term: "Layout View",
    en: "The page used to design and print a map.",
    hi: "मानचित्र को डिज़ाइन और प्रिंट करने वाला पेज।"
},




{
    term: "Geodesy",
    en: "The science of measuring the Earth's shape and size.",
    hi: "पृथ्वी के आकार और माप का अध्ययन करने वाला विज्ञान।"
},
{
    term: "Ellipsoid",
    en: "A mathematical model that represents the Earth's shape.",
    hi: "पृथ्वी के आकार को दर्शाने वाला गणितीय मॉडल।"
},
{
    term: "Geoid",
    en: "The Earth's true shape based on gravity.",
    hi: "गुरुत्वाकर्षण के आधार पर पृथ्वी का वास्तविक आकार।"
},
{
    term: "Benchmark",
    en: "A fixed reference point with a known elevation.",
    hi: "ज्ञात ऊँचाई वाला स्थायी संदर्भ बिंदु।"
},
{
    term: "Control Point",
    en: "A known location used to improve map accuracy.",
    hi: "मानचित्र की सटीकता बढ़ाने के लिए उपयोग किया जाने वाला ज्ञात स्थान।"
},
{
    term: "Horizontal Accuracy",
    en: "How close a mapped location is to its true position.",
    hi: "मानचित्र पर स्थान की वास्तविक स्थिति से निकटता।"
},
{
    term: "Vertical Accuracy",
    en: "How accurate elevation measurements are.",
    hi: "ऊँचाई माप की शुद्धता।"
},
{
    term: "Survey Station",
    en: "A fixed point used during land surveying.",
    hi: "भूमि सर्वेक्षण में उपयोग किया जाने वाला स्थायी बिंदु।"
},
{
    term: "Traverse",
    en: "A series of connected survey lines.",
    hi: "आपस में जुड़ी सर्वेक्षण रेखाओं की श्रृंखला।"
},
{
    term: "Traverse Adjustment",
    en: "Correcting survey measurements to reduce errors.",
    hi: "त्रुटि कम करने के लिए सर्वे मापों का सुधार।"
},
{
    term: "Bearing",
    en: "The direction of a line measured from north.",
    hi: "उत्तर दिशा से मापी गई रेखा की दिशा।"
},
{
    term: "Azimuth",
    en: "A clockwise angle measured from north.",
    hi: "उत्तर से दक्षिणावर्त मापा गया कोण।"
},
{
    term: "Back Bearing",
    en: "The opposite direction of a survey line.",
    hi: "सर्वे रेखा की विपरीत दिशा।"
},
{
    term: "Magnetic North",
    en: "The direction toward the Earth's magnetic pole.",
    hi: "पृथ्वी के चुंबकीय उत्तर ध्रुव की दिशा।"
},
{
    term: "True North",
    en: "The direction toward the geographic North Pole.",
    hi: "भौगोलिक उत्तर ध्रुव की दिशा।"
},
{
    term: "Magnetic Declination",
    en: "The angle between true north and magnetic north.",
    hi: "वास्तविक उत्तर और चुंबकीय उत्तर के बीच का कोण।"
},
{
    term: "Total Station",
    en: "An instrument used for measuring angles and distances.",
    hi: "कोण और दूरी मापने वाला सर्वे उपकरण।"
},
{
    term: "Electronic Distance Measurement (EDM)",
    en: "Technology used to measure distance electronically.",
    hi: "इलेक्ट्रॉनिक तरीके से दूरी मापने की तकनीक।"
},
{
    term: "Prism",
    en: "A reflector used with a total station.",
    hi: "टोटल स्टेशन के साथ उपयोग होने वाला परावर्तक।"
},
{
    term: "Prism Pole",
    en: "A pole used to hold the survey prism.",
    hi: "सर्वे प्रिज्म को पकड़ने वाली छड़।"
},
{
    term: "Leveling",
    en: "Measuring height differences between points.",
    hi: "दो बिंदुओं की ऊँचाई का अंतर मापना।"
},
{
    term: "Auto Level",
    en: "An instrument used for leveling surveys.",
    hi: "लेवल सर्वे के लिए उपयोग किया जाने वाला उपकरण।"
},
{
    term: "Staff",
    en: "A graduated rod used during leveling.",
    hi: "लेवलिंग में उपयोग की जाने वाली माप वाली छड़।"
},
{
    term: "Reduced Level (RL)",
    en: "The elevation of a point above a reference level.",
    hi: "संदर्भ स्तर से किसी बिंदु की ऊँचाई।"
},
{
    term: "Contour Interval",
    en: "The vertical distance between contour lines.",
    hi: "दो समोच्च रेखाओं के बीच की ऊँचाई का अंतर।"
},




{
    term: "Differential GPS (DGPS)",
    en: "A GPS technique that improves location accuracy using a reference station.",
    hi: "रेफरेंस स्टेशन की मदद से GPS की सटीकता बढ़ाने वाली तकनीक।"
},
{
    term: "Post Processed Kinematic (PPK)",
    en: "A positioning method where GPS data is corrected after the survey.",
    hi: "सर्वे के बाद GPS डेटा को सुधारकर अधिक सटीक स्थान प्राप्त करने की विधि।"
},
{
    term: "Base Station",
    en: "A fixed GPS receiver used as a reference for accurate positioning.",
    hi: "सटीक स्थिति के लिए संदर्भ के रूप में उपयोग किया जाने वाला स्थिर GPS रिसीवर।"
},
{
    term: "Rover",
    en: "A movable GPS receiver used to collect field coordinates.",
    hi: "फील्ड में निर्देशांक एकत्र करने वाला चलित GPS रिसीवर।"
},
{
    term: "Baseline",
    en: "The distance between the base station and the rover.",
    hi: "बेस स्टेशन और रोवर के बीच की दूरी।"
},
{
    term: "Point Cloud",
    en: "A collection of millions of 3D points representing real-world objects.",
    hi: "वास्तविक वस्तुओं को दर्शाने वाले लाखों 3D बिंदुओं का समूह।"
},
{
    term: "LAS File",
    en: "A standard file format used to store LiDAR point cloud data.",
    hi: "LiDAR पॉइंट क्लाउड डेटा को संग्रहीत करने का मानक फ़ाइल प्रारूप।"
},
{
    term: "LAZ File",
    en: "A compressed version of a LAS point cloud file.",
    hi: "LAS पॉइंट क्लाउड फ़ाइल का संपीड़ित (Compressed) रूप।"
},
{
    term: "Point Density",
    en: "The number of points collected in a given area.",
    hi: "किसी क्षेत्र में एकत्र किए गए बिंदुओं की संख्या।"
},
{
    term: "Return Pulse",
    en: "The laser signal reflected back to the LiDAR sensor.",
    hi: "LiDAR सेंसर तक वापस आने वाला लेज़र सिग्नल।"
},
{
    term: "First Return",
    en: "The first laser reflection received by the LiDAR sensor.",
    hi: "LiDAR सेंसर द्वारा प्राप्त पहली लेज़र परावर्तन।"
},
{
    term: "Last Return",
    en: "The final laser reflection received from the ground.",
    hi: "भूमि से प्राप्त अंतिम लेज़र परावर्तन।"
},
{
    term: "Canopy Height",
    en: "The height of trees above the ground.",
    hi: "भूमि से पेड़ों की ऊँचाई।"
},
{
    term: "Bare Earth Model",
    en: "A terrain model with trees and buildings removed.",
    hi: "पेड़ और इमारतों को हटाकर बनाया गया भूमि मॉडल।"
},
{
    term: "3D Mesh",
    en: "A connected network of triangles representing a 3D surface.",
    hi: "3D सतह को दर्शाने वाले जुड़े हुए त्रिभुजों का जाल।"
},
{
    term: "Textured Mesh",
    en: "A 3D mesh with realistic image textures applied.",
    hi: "वास्तविक तस्वीरों की टेक्सचर वाला 3D मेष।"
},
{
    term: "Digital Twin",
    en: "A virtual 3D model of a real-world object or place.",
    hi: "वास्तविक वस्तु या स्थान का डिजिटल 3D मॉडल।"
},
{
    term: "SLAM",
    en: "A technique that builds a map while tracking the sensor's position.",
    hi: "सेंसर की स्थिति पता करते हुए साथ ही मानचित्र बनाने की तकनीक।"
},
{
    term: "ICP Algorithm",
    en: "A method used to align two 3D point clouds.",
    hi: "दो 3D पॉइंट क्लाउड को मिलाने की विधि।"
},
{
    term: "Bathymetry",
    en: "Measuring the depth and shape of the underwater surface.",
    hi: "पानी के नीचे की गहराई और सतह का मापन।"
},
{
    term: "Hydrography",
    en: "The study and mapping of rivers, lakes, and oceans.",
    hi: "नदियों, झीलों और महासागरों का अध्ययन और मानचित्रण।"
},
{
    term: "Cross Section",
    en: "A side view showing the shape of the land or river.",
    hi: "भूमि या नदी के आकार का पार्श्व दृश्य।"
},
{
    term: "Longitudinal Profile",
    en: "A view showing elevation changes along a path.",
    hi: "किसी मार्ग के साथ ऊँचाई में होने वाले बदलाव का दृश्य।"
},
{
    term: "Breakline",
    en: "A line representing a sharp change in terrain.",
    hi: "भूभाग में अचानक बदलाव को दर्शाने वाली रेखा।"
},
{
    term: "Mass Point",
    en: "A surveyed point used to represent terrain elevation.",
    hi: "भूभाग की ऊँचाई दर्शाने के लिए लिया गया सर्वे बिंदु।"
},





{
    term: "Open Geospatial Consortium (OGC)",
    en: "An organization that creates standards for sharing geospatial data.",
    hi: "भौगोलिक डेटा साझा करने के मानक बनाने वाला संगठन।"
},
{
    term: "OGC Standard",
    en: "A common rule that allows GIS software to work together.",
    hi: "ऐसा मानक जिससे अलग-अलग GIS सॉफ्टवेयर एक साथ काम कर सकें।"
},
{
    term: "Web Map Service (WMS)",
    en: "A service that provides map images over the internet.",
    hi: "इंटरनेट पर मानचित्र की इमेज उपलब्ध कराने वाली सेवा।"
},
{
    term: "Web Feature Service (WFS)",
    en: "A service that shares editable vector features online.",
    hi: "ऑनलाइन संपादन योग्य वेक्टर डेटा साझा करने वाली सेवा।"
},
{
    term: "Web Coverage Service (WCS)",
    en: "A service that provides raster data over the web.",
    hi: "वेब के माध्यम से रास्टर डेटा उपलब्ध कराने वाली सेवा।"
},
{
    term: "Web Map Tile Service (WMTS)",
    en: "A service that delivers map tiles for fast display.",
    hi: "तेज़ी से मानचित्र दिखाने के लिए टाइल उपलब्ध कराने वाली सेवा।"
},
{
    term: "Feature Service",
    en: "An online service for viewing and editing GIS features.",
    hi: "GIS फीचर्स को देखने और संपादित करने की ऑनलाइन सेवा।"
},
{
    term: "Image Service",
    en: "An online service that shares raster imagery.",
    hi: "रास्टर इमेज साझा करने वाली ऑनलाइन सेवा।"
},
{
    term: "Map Service",
    en: "An online service that displays map layers.",
    hi: "मानचित्र लेयर दिखाने वाली ऑनलाइन सेवा।"
},
{
    term: "Tile Service",
    en: "A service that provides pre-generated map tiles.",
    hi: "पहले से तैयार मानचित्र टाइल उपलब्ध कराने वाली सेवा।"
},
{
    term: "GeoPackage (GPKG)",
    en: "A single file format for storing vector and raster GIS data.",
    hi: "वेक्टर और रास्टर दोनों प्रकार के GIS डेटा को रखने वाला एकल फ़ाइल प्रारूप।"
},
{
    term: "File Geodatabase",
    en: "A folder-based database for storing GIS datasets.",
    hi: "GIS डेटा संग्रहित करने के लिए फ़ोल्डर आधारित डेटाबेस।"
},
{
    term: "Enterprise Geodatabase",
    en: "A GIS database designed for multiple users.",
    hi: "कई उपयोगकर्ताओं के लिए बनाया गया GIS डेटाबेस।"
},
{
    term: "Spatial Data Infrastructure (SDI)",
    en: "A framework for sharing geographic data and services.",
    hi: "भौगोलिक डेटा और सेवाओं को साझा करने की प्रणाली।"
},
{
    term: "Geoportal",
    en: "A website used to search and access geospatial data.",
    hi: "भौगोलिक डेटा खोजने और प्राप्त करने वाली वेबसाइट।"
},
{
    term: "Metadata Catalog",
    en: "A collection of information describing GIS datasets.",
    hi: "GIS डेटासेट की जानकारी का संग्रह।"
},
{
    term: "Catalog Service",
    en: "A service used to search available GIS datasets.",
    hi: "उपलब्ध GIS डेटा खोजने वाली सेवा।"
},
{
    term: "REST API",
    en: "A web interface used for accessing GIS services.",
    hi: "GIS सेवाओं तक पहुँचने के लिए उपयोग किया जाने वाला वेब इंटरफेस।"
},
{
    term: "JSON",
    en: "A lightweight format used to exchange GIS data.",
    hi: "GIS डेटा साझा करने के लिए उपयोग किया जाने वाला हल्का डेटा प्रारूप।"
},
{
    term: "XML",
    en: "A markup language used for storing geographic information.",
    hi: "भौगोलिक जानकारी संग्रहित करने की मार्कअप भाषा।"
},
{
    term: "Cloud Optimized GeoTIFF (COG)",
    en: "A GeoTIFF file optimized for fast cloud access.",
    hi: "क्लाउड पर तेज़ी से उपयोग के लिए अनुकूलित GeoTIFF फ़ाइल।"
},
{
    term: "NetCDF",
    en: "A file format for storing scientific and climate data.",
    hi: "वैज्ञानिक और जलवायु डेटा संग्रहित करने का फ़ाइल प्रारूप।"
},
{
    term: "HDF5",
    en: "A file format for storing large scientific datasets.",
    hi: "बड़े वैज्ञानिक डेटासेट रखने का फ़ाइल प्रारूप।"
},
{
    term: "STAC",
    en: "A standard for organizing and searching geospatial assets.",
    hi: "जियोस्पेशियल डेटा को व्यवस्थित और खोजने का मानक।"
},
{
    term: "Asset",
    en: "A data file linked to a geospatial dataset.",
    hi: "जियोस्पेशियल डेटासेट से जुड़ी डेटा फ़ाइल।"
},


{
    term: "Leaflet",
    en: "A JavaScript library used to create interactive web maps.",
    hi: "इंटरैक्टिव वेब मैप बनाने के लिए उपयोग की जाने वाली JavaScript लाइब्रेरी।"
},
{
    term: "OpenLayers",
    en: "An open-source library for displaying GIS maps on the web.",
    hi: "वेब पर GIS मानचित्र दिखाने के लिए ओपन-सोर्स लाइब्रेरी।"
},
{
    term: "CesiumJS",
    en: "A JavaScript library for creating 3D maps and globes.",
    hi: "3D मानचित्र और ग्लोब बनाने की JavaScript लाइब्रेरी।"
},
{
    term: "Mapbox GL JS",
    en: "A library for building fast and interactive vector maps.",
    hi: "तेज़ और इंटरैक्टिव वेक्टर मानचित्र बनाने की लाइब्रेरी।"
},
{
    term: "GeoNode",
    en: "A platform for sharing and managing geospatial data online.",
    hi: "ऑनलाइन जियोस्पेशियल डेटा साझा और प्रबंधित करने का प्लेटफॉर्म।"
},
{
    term: "GeoWebCache",
    en: "A tool that stores map tiles for faster map loading.",
    hi: "तेज़ मानचित्र लोडिंग के लिए मैप टाइल संग्रहीत करने वाला टूल।"
},
{
    term: "CityGML",
    en: "A standard for storing and sharing 3D city models.",
    hi: "3D शहर मॉडल को संग्रहित और साझा करने का मानक।"
},
{
    term: "Indoor GIS",
    en: "GIS used for mapping the inside of buildings.",
    hi: "भवनों के अंदर का मानचित्र बनाने के लिए उपयोग किया जाने वाला GIS।"
},
{
    term: "Indoor Positioning",
    en: "Finding locations inside buildings where GPS is weak.",
    hi: "जहाँ GPS काम नहीं करता वहाँ भवन के अंदर स्थान पता करना।"
},
{
    term: "Utility Network",
    en: "A GIS model for managing electricity, water, gas, and telecom networks.",
    hi: "बिजली, पानी, गैस और दूरसंचार नेटवर्क प्रबंधन के लिए GIS मॉडल।"
},
{
    term: "Parcel Fabric",
    en: "A GIS dataset used to manage land parcels.",
    hi: "भूमि के प्लॉट प्रबंधन के लिए उपयोग किया जाने वाला GIS डेटासेट।"
},
{
    term: "BIM",
    en: "A digital model containing detailed building information.",
    hi: "भवन की विस्तृत जानकारी वाला डिजिटल मॉडल।"
},
{
    term: "BIM-GIS Integration",
    en: "Connecting building models with geographic information.",
    hi: "भवन मॉडल को भौगोलिक जानकारी के साथ जोड़ना।"
},
{
    term: "Voxel",
    en: "A 3D pixel used to represent volume data.",
    hi: "आयतन (Volume) डेटा दिखाने वाला 3D पिक्सेल।"
},
{
    term: "3D Tiles",
    en: "A format for streaming large 3D geospatial data.",
    hi: "बड़े 3D जियोस्पेशियल डेटा को प्रदर्शित करने का प्रारूप।"
},
{
    term: "Scene Layer",
    en: "A layer used to display 3D geographic objects.",
    hi: "3D भौगोलिक वस्तुओं को दिखाने वाली लेयर।"
},
{
    term: "Scene Service",
    en: "An online service for sharing 3D GIS scenes.",
    hi: "3D GIS दृश्य साझा करने की ऑनलाइन सेवा।"
},
{
    term: "Mesh Layer",
    en: "A layer that displays connected 3D surface models.",
    hi: "जुड़ी हुई 3D सतहों को दिखाने वाली लेयर।"
},
{
    term: "Web Scene",
    en: "An interactive 3D map viewed in a web browser.",
    hi: "वेब ब्राउज़र में देखी जाने वाली इंटरैक्टिव 3D मैप।"
},
{
    term: "Experience Builder",
    en: "A tool for creating GIS web applications without coding.",
    hi: "बिना कोड लिखे GIS वेब एप्लिकेशन बनाने का टूल।"
},
{
    term: "Dashboard Widget",
    en: "A visual component that displays GIS information.",
    hi: "GIS जानकारी दिखाने वाला विजुअल घटक।"
},
{
    term: "Network Dataset",
    en: "A dataset used for route and network analysis.",
    hi: "रूट और नेटवर्क विश्लेषण के लिए उपयोग किया जाने वाला डेटासेट।"
},
{
    term: "Trace Network",
    en: "A GIS model used to trace connected network paths.",
    hi: "जुड़े हुए नेटवर्क मार्गों का पता लगाने वाला GIS मॉडल।"
},
{
    term: "Utility Trace",
    en: "Following the flow of water, electricity, or gas in a network.",
    hi: "नेटवर्क में पानी, बिजली या गैस के प्रवाह का पता लगाना।"
},
{
    term: "Digital Terrain Visualization",
    en: "Displaying terrain in realistic 2D or 3D views.",
    hi: "भूभाग को वास्तविक 2D या 3D दृश्य में प्रदर्शित करना।"
}

];

function renderCards() {
    const grid = document.getElementById('glossaryGrid');
    let htmlContent = "";

    glossaryData.forEach((item, index) => {
        let delay = (index % 10) * 0.1; 
        
        htmlContent += `
        <div class="card" style="animation-delay: ${delay}s" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front">
                    <h2>${item.term}</h2>
                </div>
                <div class="card-back">
                    <p><strong>EN:</strong> ${item.en}</p>
                    <p><strong>HI:</strong> ${item.hi}</p>
                </div>
            </div>
        </div>
        `;
    });

    grid.innerHTML = htmlContent;
}

function searchGlossary() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let term = cards[i].querySelector('.card-front h2').innerText.toLowerCase();
        
        if (term.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

window.onload = renderCards;
