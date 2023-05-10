
import WelcomeSection from './welcome-section';
import ClientSection from './client-section';
import BrowseCollectionComponent from './collection';
import CustomerReview from './customer-review';
import '../../css/homepage.css';



const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <WelcomeSection />
            <ClientSection />
            <BrowseCollectionComponent />
            <CustomerReview />
        </div>
    )
}
export default HomePage;