import PopularImage1 from '../assets/images/popular-1.jpg'
import PopularImage2 from '../assets/images/popular-2.jpg'
import PackagesImage1 from '../assets/images/packege-1.jpg'
import PackagesImage2 from '../assets/images/packege-2.jpg'
import PackagesImage3 from '../assets/images/packege-3.jpg'
import galleryImange1 from '../assets/images/gallery-1.jpg'
import galleryImage2 from '../assets/images/gallery-2.jpg'
import galleryImage3 from '../assets/images/gallery-3.jpg'
import galleryImage4 from '../assets/images/gallery-4.jpg'
import galleryImage5 from '../assets/images/gallery-5.jpg'


const card = [
    {
        img: PopularImage1,
        title: 'Italy',
        card_title: 'SAN MIGUEL'
    },
    {
        img: PopularImage2,
        title: 'Dubai',
        card_title: 'BURJ KHALIFA'
    },
    {
        img: PopularImage1,
        title: 'Japan',
        card_title: 'KYOTO TEMPLE'
    },
]

const packages = [
    {
        img: PackagesImage1,
        card_title: 'EXPERIENCE THE GREAT HOLIDAY ON BEACH',
        description: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        reviews: 25,
        price: 750
    },
    {
        img: PackagesImage2,
        card_title: 'SUMMER HOLIDAY TO THE OXOLOTAN RIVER',
        description: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        reviews: 40,
        price: 520
    },
    {
        img: PackagesImage3,
        card_title: 'SANTORINI ISLANDS WEEKEND VACATION',
        description: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        reviews: 40,
        price: 660
    }
]

const galleries = [
{
    img: galleryImange1
},
{
    img: galleryImage3
},
{
    img: galleryImage2
},
{
    img: galleryImage4
},
{
    img: galleryImage5
},
]


export { card, packages, galleries }
