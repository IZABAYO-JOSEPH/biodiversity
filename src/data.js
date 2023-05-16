import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const pageLinks = [
    {id:1,href:"#home",text:"Home"},
    {id:2,href:"#about",text:"About"},
    {id:3,href:"#services",text:"Services"},
    {id:4,href:"#places",text:"Places"}
]
export const socialLinks =[
    {id:1,href:"https://www.twitter.com",icon:"fab fa-facebook"},
    {id:2,href:"https://www.twitter.com",icon:"fab fa-twitter"},
    {id:3,href:"https://www.twitter.com",icon:"fab fa-squarespace"}
]

export const services = [
    {
    id:1, 
    icon:"fas fa-wallet fa-fw",
    title:"Gutunganya Ibishanga", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
},
{
    id:2, 
    icon:"fas fa-tree fa-fw",
    title:"Kubungabunga Ibishanga", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
},
{
    id:3,
    icon:"fas fa-socks fa-fw",
    title:"Urusobe rwibinyabuzima", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
},
]

export const tours = [
    {
    id:1,
    image:tour1,
    Date:"august 26th, 2020",
    title:"Kurengera Urusobe",
    info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location:"Rwanda",
    duration:5,
    cost:2100
    },
    {
        id:2,
        image:tour3,
        Date:"august 26th, 2020",
        title:"Kurengera Urusobe",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        location:"Burundi",
        duration:5,
        cost:2100
        },
        {
            id:3,
            image:tour2,
            Date:"august 26th, 2020",
            title:"Kurengera Urusobe",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
            location:"Kenya",
            duration:5,
            cost:2100
            }
            ,
            {
                id:4,
                image: tour4,
                Date:"august 26th, 2020",
                title:"Kurengera Urusobe",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
                location:"Congo",
                duration:5,
                cost:2100
                }
]