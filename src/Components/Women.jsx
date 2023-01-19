import Bigoffer from "./Bigoffer";
import BrandToBag from "./BrandToBag";
import Budgetbuys from "./BudgetBuys";
import Footer from "./Footer";
import Grand from "./Grand";
import Shopcate from "./ShopCate";
import WomensPoster from "./Women.poster";
import WomenRoundBrand from "./WomenRoundBrand";
import WomensBagbrands from "./WomensBagbrands";
import WomensBrand from "./WomensBrand";
import WomensCategory from "./WomensCategory";
import WomensLastCate from "./WomensLastCate";

const Women=()=>{
    return(
        <div>
            <WomensPoster/>
            <Bigoffer/>
            <WomensBrand/>
            <Grand/>
            <WomensBagbrands/>
            <BrandToBag/>
            <WomenRoundBrand/>
            <Budgetbuys/>
            <WomensCategory/>
            <Shopcate/>
            <WomensLastCate/>
            <Footer/>
        </div>
    )
}
export default Women;