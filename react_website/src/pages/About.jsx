import '../assets/css/default.css'

import NavBar from '../components/NavBar.jsx';

export default function About(){
    return(
        <body>
            <NavBar />

            <div id="title">
                <h1>About...</h1>
            </div>

            <div id="body">
                <h2>... The Company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas lacinia nunc et ultricies. Sed suscipit cursus lacus, ultricies posuere metus aliquam nec. Aliquam erat volutpat. Vivamus lobortis sem ut ante maximus, at iaculis nibh feugiat. Vestibulum vel auctor velit. Maecenas mollis porta justo, et posuere ipsum luctus fermentum. In.</p>

                <h2>... The Manifesto</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas lacinia nunc et ultricies. Sed suscipit cursus lacus, ultricies posuere metus aliquam nec. Aliquam erat volutpat. Vivamus lobortis sem ut ante maximus, at iaculis nibh feugiat. Vestibulum vel auctor velit. Maecenas mollis porta justo, et posuere ipsum luctus fermentum. In.</p>

                <h2>... The Vision</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas lacinia nunc et ultricies. Sed suscipit cursus lacus, ultricies posuere metus aliquam nec. Aliquam erat volutpat. Vivamus lobortis sem ut ante maximus, at iaculis nibh feugiat. Vestibulum vel auctor velit. Maecenas mollis porta justo, et posuere ipsum luctus fermentum. In.</p>
            </div>
        </body>
    );
}