import HeaderComponent from './header';
import WelcomeSection from './welcome-section';
import ClientSection from './client-section';
import BrowseCollectionComponent from './collection';
import CustomerReview from './customer-review';
import NewsletterComponent from './newsletter';
import HomepageFooter from './footer';
import '../../css/homepage.css';


const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <HeaderComponent />
            <WelcomeSection />
            <ClientSection />
            <BrowseCollectionComponent />
            <CustomerReview />
            <div className="white-bg">
                <NewsletterComponent />
                <HomepageFooter />
            </div>
        </div>
    )
}
export default HomePage;