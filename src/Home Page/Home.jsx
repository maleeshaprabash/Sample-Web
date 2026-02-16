import FrontPage from "./FrontPage"
import MiddleContainer from "./MiddleContainer"
import Popular from "./PopularCollection"

function Home () {
    return(
        <div>
            <FrontPage />
            <MiddleContainer />
            <Popular />
        </div>
    )
}

export default Home