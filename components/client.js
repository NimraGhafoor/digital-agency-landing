// components/Clients.js
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Clients() {
  return (
    <div className="container">
      <h2 className="mt-5 text-center">Stay Update with Digital Agency Trend</h2>
      <p className="text-center">K-pop and soccer stars, actresses and singers — the fashion week A-list increasingly hails from South Korea, Thailand and the Philippines.</p>
      <div className="text-center mb-4">
        <a href="#" className="btn btn-primary">See More Article →</a>
      </div>
      <div className="row">
        {articles.map((article, index) => 
          (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href="#" className="btn btn-link">Read More</a>
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
};

// Sample Article Data
const articles = [
  {
    title: 'Digital Demand Generation Strategy for Modern Marketers',
    description: 'Focused on recycled clothing, some brides are finding their wedding attire on vintage sites and at resale stores.',
    image: 'public\image1.png', 
  },
  {
    title: 'Inbound Marketing Funnel: A Step-by-Step Guide',
    description: 'Explaining the steps necessary to create and maintain an effective inbound marketing funnel.',
    image: 'public\image2.png',  
  },
  {
    title: 'Branded Content Marketing: Benefits and Strategies',
    description: 'Discussing the advantages of branded content and strategies to implement it successfully.',
    image: 'public\image3.png',  
  },
];

