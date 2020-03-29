export default function Hero({ content, children }) {
    return (
        <div className="hero container">
            <div className="claim"><h1>{children}</h1>
                <p>{content}</p>
            </div>
            <div className="stripe"></div>
            <div className="rectangle">
                <div><div className="unskew"><p className="lead">
                    Give it a go with us, we are the best!
                    </p>
                    <p>Tell me more!</p>
                </div>

                </div>
            </div>
            <style jsx>{`
            .hero {
                color: white;
                height: 100vh;
                display: flex;
                padding-top: 97px;
                height: 100vh;
                overflow: hidden;
            }

            .claim {
                width: 60%;
                padding-top: 50px;
            }

            .claim p {
                width: 75%;
            }

            h1 {
                font-size: 70px;   
                line-height: 1.3;            
            }

            @media (min-width: 1024px) {
                h1 {
                    font-size: 34px;
                }
            }

            @media (min-width: 1200px) {
                h1 {
                font-size: 80px;   
                margin-top: 100px;
                line-height: 1.3;             
            }
            }

            p {
                font-size: 22px;
                text-align: justify;
            }

            p.lead {
                font-size: 40px;
                margin-top: 0;
            }

            .stripe {
                    width: 175px;
                    background: rgba(244, 174, 156, .75);
                    transform: skew(-21deg);  
                    z-index: -1;
            }
            .rectangle { 
                display: flex;
                justify-content: flex-end;
                margin-left: auto;
                overflow: hidden
            }

            .rectangle > div {
                background: rgba(0, 0, 0, .35);
                font-size: 40px;
                padding: 30px 70px 50px 70px;
                padding-right: 80px;
                align-self: flex-end;
                margin-bottom: 10%;
                transform: skew(-21deg);
                margin-right: -50px;
                margin-left: 100px;
            }
            div > .unskew {
                transform: skew(21deg);
            }
            `}</style>
        </div>
    )
}