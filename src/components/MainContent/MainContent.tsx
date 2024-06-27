import { MainContainer, Heading, SearchBar, UploadCV, PopularSearches } from './styles';

export const MainContent: React.FC = () => (
    <MainContainer>
      <Heading>Find the right fit.</Heading>
      <SearchBar>
        <input type="text" placeholder="Search jobs, keywords, companies" />
        <input type="text" placeholder="Enter location or 'remote'" />
        <button className="search-button">🔍</button>
      </SearchBar>
      <UploadCV href="#">Upload Your CV - Get noticed by top employers!</UploadCV>
      <PopularSearches>
        <a href="#">Part-Time</a>
        <a href="#">Work from Home</a>
        <a href="#">Logistics</a>
        <a href="#">Driver</a>
        <a href="#">Sales</a>
        <a href="#">IT</a>
        <a href="#">Engineering</a>
      </PopularSearches>
    </MainContainer>
  );