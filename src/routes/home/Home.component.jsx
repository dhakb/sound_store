import Directory from "../../components/directory/Directory.component";

const Home = () => {

    const categories = [
        {
            id: 1,
            title: 'bowed string',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'woodwind',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            id: 3,
            title: 'percussions',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            id: 4,
            title: 'keyboards',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
        {
            id: 5,
            title: 'guitar family',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
    ];

    return <Directory categories={categories}>Home Page</Directory>
}


export default Home