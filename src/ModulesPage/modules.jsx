import whatAreStocksImg from "./images/image32.png";
import techAnalysis from "./images/image13.png";
import supportPrice from "./images/image11.png";
import supportBounce from "./images/image2.png";
import upTrend from "./images/image5.png";
import downTrend from "./images/image4.png";
import chartResistance from "./images/image18.png";
import basicSupply from "./images/image45.png";
import basicSupplyDrop from "./images/image14.png";
import basicDemand from "./images/image15.png";

const modules = [
    
        {
            id: 1,
            title: "What are Stocks?",
            description: "Stocks are shares that an individual buys that represent having a piece of divided ownership of a corporation. A single share of stock can grow or decrease in value depending on the corporation’s assets and profits . Individuals may buy/sell stocks. A collection of shares is referred to as a “stock”. These stocks are publicly available and can be bought through brokerages.",
            hasList: false,
            subtopics: [
                {
                    title: "Supply and Demand Law",
                    description: "The law of supply and demand is a theory that explains how the market is controlled by buyers and sellers interactions with a stock. The price of a stock is determined by the willingness of people to buy or sell that share.",
                    images: [
                        {
                            image: whatAreStocksImg,
                            caption: "Golden Cross (Bullish Cross)",
        
                        },
                    ]
                }
            ],
        },

        {
            id: 2,
            title: "What are Options?",
            description: "Options are a contract in which the buyer has a chance to buy or sell shares of a corporation. Owners of option contracts are not required to buy or sell the shares in the contract. Option contracts have due dates where the buyer must decide whether to exercise their option. Option contracts hold value that changes with higher volatility than stocks. The stated price on an option is the strike price. A buyer bets on whether a share price will go up or down by the expiration date.",
            hasList: true,
            takeaways: [
                "Exponential moving averages are designed to see price trends over specific time frames such as 50 or 200 days.",
                "Compared to simple moving averages, EMAs give greater weight to recent (more relevant) data.",
                "Computing the exponential moving average involves applying a multiplier to the SMA (simple moving average).",
            ],
            subtopics: [
                {
                    title: "Calls",
                    description: "A call option is a contract that gives the buyer the right to buy a certain amount of shares at a specified price within a specified time. The buyer is not obligated to purchase the stocks. It is essentially betting a stock will rise in price by the expiration date.",
                    images: [
                        {
                            image: whatAreStocksImg,
                            caption: "Golden Cross (Bullish Cross)",
        
                        },
                    ]
                },
                {
                    title: "Puts",
                    description: "A puts option is a contract that gives the buyer the right to sell a certain amount of shares at a specified price within a specified time. The buyer is not obligated to sell the stocks. It is essentially betting a stock will fall in price by the expiration date.",
    
                }
            ]
                
        },
            
        {
            id: 3,
            title: "Technical Analysis",    
            description: "A method of analysis in which one observes historical market data, price action, and volume of an underlying stock to determine future price movements. With the use of many different strategies, it serves as a good technique to predict future market behavior like trend reversals or continuations  that allows a trader or investor to recognize potential entry and exit points for a trade.",
            hasList: true,
            takeaways: ["Exponential moving averages are designed to see price trends over specific time frames such as 50 or 200 days.",
            "Compared to simple moving averages, EMAs give greater weight to recent (more relevant) data.",
            "Computing the exponential moving average involves applying a multiplier to the SMA (simple moving average).",
            "Moving average ribbons allow traders to see multiple EMAs at the same time.",
            "EMA positioning varies on time frames (The bigger the time frame, the more important the level)."],
            subtopics: [
                {
                    title: "EMA",
                    description: "The Exponential Moving Average, or EMA for short, is a technical chart indicator that tracks the price of a stock over time. The EMA is a type of weighted moving average that gives more weighting or importance to recent price data. ",
    
                },
                {
                    title: "Most Common EMAs",
                    description: "For identifying significant, long-term support and resistance levels/overall trends, the 50-day, 100-day, and 200-day moving averages are the most common. Trend Direction - The 200-day moving average is considered especially significant in stock trading. As long as the 50-day moving average of a stock price remains above the 200-day moving average, the stock is generally thought to be in a bullish trend. A Golden cross signifies the start of a bullish trend when the 50-day moving average crosses above the 200-day moving average as shown in this picture. Once a Golden cross is formed, it gives confirmation to the trader that an uptrend is beginning and/or continuing.",
                    images: [
                        {
                            image: techAnalysis,
                            caption: "Death Cross (Bearish Cross)",
        
                        },
                    ]
                }
            ]
        },

        {
            id: 4,
            title: "Support and Resistance",
            description: "Support is a price level where a downtrend can be expected to bounce due to a concentration of demand or buying interest. As the price of assets or securities drops, demand for the shares increases, thus forming the support line. Once an area of support has been identified, those price levels can serve as potential entry or exit points because as price reaches a point of support, it will do one of two things: bounce back away from the support, or violate the price level and continue in its direction until it hits the next support level. Support levels act as high probability areas where buyers want to buy the asset. For this reason purchasing an asset at this level is the best “bang for your buck.” Since everyone else wants to buy the asset in this area, there is a high probability the key level you identified will act as a bottom.",
            hasList: false,
            subtopics: [
                {
                    title: "How to chart support",
                    description: "Charting support is very simple as it's basically drawing all the low points that the price of the stock has made. As seen in the figure below, price respected the support level and bounced every time it touched support.",
                    images: [
                        {
                            image: supportPrice,
                            caption: "Support Points",
        
                        },
                    ]
                },
                {
                    title: "Entry and Exit",
                    description: "Enter long (calls) after the price has bounced off of support. This basically means you’re catching the bottom of the price. Always use your other indicators and wait for confirmation of bounce off support level. By entering long at a support level, you can potentially catch the reversal moving up.",
                    images: [
                        {
                            image: supportBounce,
                            caption: "Support Reversal Entry",
        
                        },
                    ]
                },
                {
                    title: "Trendlines",
                    description: "Support can be either horizontal or diagonal. Draw trendlines with support at the lows.",
                    images: [
                        {
                            image: upTrend,
                            caption: "Upwards Trending Chart",
        
                        },
                        {
                            image: downTrend,
                            caption: "Downwards Trending Chart",
                        }
                    ]

                },
                {
                    title:"Resistance",
                    description: "Resistance is a price level where an uptrend can be expected to reject due to a concentration of supply or selling interest. As the price of assets or securities increase, supply for the shares decreases, thus forming the resistance line. Once an area or point of resistance has been identified, those price levels can serve as potential entry or exit points because as a price reaches a point of resistance it will do one of two things: bounce back away from the resistance, or violate the price level and continue in its direction–until it hits the next resistance level. Resistance levels act as high probability areas where sellers want to sell the asset. For this reason, purchasing an asset at this level is extremely risky as this can be considered a potential top. Since everyone else wants to sell the asset in this area, there is a high probability that the key level identified will act as a top.",
                },
                {
                    title: "How to chart resistance",
                    description: "To chart resistance, draw all the high points (the highs of a stock) that the stock’s price has made. As seen in the figure below, the price respected the resistance level and rejected every time it touched resistance.",
                    images: [
                        {
                            image: chartResistance,
                            caption: "Resistance Charting",
        
                        },
                    ]
                }
            ]
        },

        {
            id: 5,
            title: "Supply and Demand",
            description: "Two types of markets: Balanced - Market participants are agreeing on a price. There is an equilibrium between buyers and sellers which creates massive liquidity (sideways/consolidation). Imbalance - Market participants are not agreeing on a price. Demand exceeds supply or supply exceeds demand. This creates an illiquid area of price since all the orders were in favor of the sellers or buyers.",
            hasList: false,
            subtopics: [
                {
                    title: "Supply",
                    description: "A supply zone is the specific price range where sellers want to sell/short the security. More specifically big institutions that control market movements. Price in a market only moves because of two reasons - it is important to understand the auction process and how it works. If you have supply > demand, you may have a massive drop imbalance and there will be unfilled orders sitting at the origin location that did not get filled the first time since the price fell too quickly. In the above example, the price had a massive drop imbalance because supply (sellers) exceeded demand (buyers) thus leaving over unfilled sell orders in the origin location. This creates an overhead level of supply where looming sell orders exist. When the price revisits the same level where the origin imbalance was created, the unfilled sell orders begin getting filled. This makes supply zomes inherent resistance levels where price will struggle to get above - since supply exceeds demand. These levels are broader than a resistance line, however very similar. The only difference is that zones encompass a larger area. Imagine supply zones as large resistance areas with a huge concentration of sellers.",
                    images: [
                        {
                            image: basicSupply,
                            caption: "Basic Supply Chart",
                        },
                    ]
                },
                {
                    title: "How to chart supply",
                    description: "The best way to find supply zones is to look at the candlestick chart. Here is the order of things to do to spot supply zones: Look at the chart and try to spot a massive drop imbalance. It is important that the price moves a lot. Establish the base (beginning) from which price started the quick move. Usually, before a large move, you have a small sideways move- that is where your supply zone is. The areas above show a basing period for the stock, then a steep move to the downside. These are the exact things we are looking for to identify supply. Price needs to be balanced for a period of time (consolidating), then have a massive drop imbalance which signifies that sell orders will be leftover in the origin location.",
                    images: [
                        {
                            image: basicSupplyDrop,
                            caption: "Basic Supply Drop Chart",
                        },
                    ]
                },
                {
                    title: "Demand",
                    description: "A demand zone is the specific price range where buyers want to buy/long the security. If you have demand > supply, you may have a massive rally imbalance and there will be unfilled orders at the origin location that did not get filled the first time since the price rose too fast. In this example, the price had a massive rally imbalance because demand (buyers) exceeded supply (sellers) leaving unfilled buy orders in the origin location. This creates a level of demand where looming buy orders exist. When the price revisits the same level where the origin imbalance was created, the unfilled buy orders begin getting filled. This makes demand zones inherent support levels where prices will likely bottom - since demand exceeded supply. These levels are broader than a support line, however very similar. The only difference is that zones encompass a larger area. Imagine demand zones as large support areas with a huge concentration of buyers.",
                    images: [
                        {
                            image: basicDemand,
                            caption: "Basic Demand Chart",
                        },
                    ]
                }
            ]
        }
];


export default modules