import { TiThLargeOutline } from "react-icons/ti";
import { TbCup } from "react-icons/tb";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";

export const categories = [
    {
        id: 1,
        name: "All",
        image: <TiThLargeOutline className="w-15 h-15 text-green-600" />
    },
    {
        id: 2,
        name: "breakfast",
        image: <TbCup className="w-15 h-15 text-green-600" />
    },
    {
        id: 3,
        name: "soups",
        image: <TbSoup className="w-15 h-15 text-green-600" />
    },
    {
        id: 4,
        name: "pasta",
        image: <CiBowlNoodles className="w-15 h-15 text-green-600" />
    },
    {
        id: 5,
        name: "main_course",
        image: <GiKnifeFork className="w-15 h-15 text-green-600" />
    },
    {
        id: 6,
        name: "pizza",
        image: <GiFullPizza className="w-15 h-15 text-green-600" />
    },
    {
        id: 7,
        name: "burger",
        image: <PiHamburgerFill className="w-15 h-15 text-green-600" />
    }
]