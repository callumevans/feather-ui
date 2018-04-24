import { h, Component } from 'preact';

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <h1>Post Title</h1>
                <time dateTime="2018-04-23">April 23</time>
                <section>
                    <p>
                        Swag you know I'm a real OG and baby I ain't from the TO no one can stop me.
                        I'd like to be an architect, that would be cool, cause I like drawing got your girlfriend at my crib watching Netflix I'm all fancy, yeah I'm popping Pellegrino.
                        Let the music blast we gon' do our dance got your girlfriend at my crib watching Netflix what you got, a billion could've never bought.
                        If I was your boyfriend, I'd never let you go I like The Notebook baby know for sho', I'll never let you go.
                        And all the haters I swear they look so small from up here I make good grilled cheese and I like girls but something would be nothing.
                    </p>

                    <p>
                        Worst birthday ever I think older people can appreciate my music worst birthday ever.
                        Let the music blast we gon' do our dance you know I'm a real OG and baby I ain't from the TO ooh no, ooh no, ooh.
                        If I was your boyfriend, I'd never let you go no one can stop me let the music blast we gon' do our dance.
                        I'ma make you shine bright like you're laying in the snow, burr no matter how much I try, I can't figure out how to not be adorable worst birthday ever.
                        It's a Bieber world live it or die I'ma make you shine bright like you're laying in the snow, burr ooh no, ooh no, ooh.
                    </p>
                </section>
            </article>
        )
    }
}

export default Post;