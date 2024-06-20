import '../assets/css/default.css'

export default function Index(){
    return (
        <body>
            <div id="title">
                <img src=".\src\assets\img\company-assets\prototype-logo.png" />
            </div>

            <div id="body">
                <h2>Search through a catalog of Filipino Recipes</h2>
                <p>You get to find a recipe that fits the following:
                    <ul>
                        <li>budget</li>
                        <li>complexity</li>
                        <li>type of desserts</li>
                    </ul>
                </p>

                <h2>Get it delivered to you</h2>
                <p>Our company can send you the necessary ingredients within the day through local branches. If you can afford to, we can send you the finished recipe instead!</p>

                <h2>Testimonials</h2>
                <ul>
                    <li><i>"The catalogue is very organized!"</i> - Riza Roforo</li>
                    <li><i>"I found the number of brances concerning, but the ease of delivery, and the chance of being able to cook the recipe myself, is a very particular learning experience."</i> - Some customer</li>
                    <li><i>"Nunc semper dui non lorem euismod, vel facilisis orci efficitur."</i> - Lorem Ipsum Dolor</li>
                </ul>
            </div>
        </body>
    );
}