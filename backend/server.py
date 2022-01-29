from flask import Flask
import requests
from datetime import date
import pandas as pd
import yahoo_fin.stock_info as si
from yahoo_fin import news
import json
from numerize import numerize

def numMarketcap(x):
    try:
        return numerize.numerize(x)
    except:
        return x


app = Flask(__name__)

@app.route("/dashboard<count>")
def topNcompanies(count):
    df = si.get_day_most_active(count=count).fillna(0)
    df['Avg Vol (3 month)'] = df['Avg Vol (3 month)'].apply(numerize.numerize)
    df['Volume'] = df['Volume'].apply(numerize.numerize)
    df.columns = ['ticker', 'name', 'price', 'absChange', 'relChange', 'volume', 'avgVolume', 'marketCap', 'peratio']
    df['marketCap'] = df['marketCap'].apply(numMarketcap)
    top_companies = [dict(row[1]) for row in df.iterrows()]
    comMap = {"companies": top_companies}
    top_companies_json = json.dumps(comMap)
    return top_companies_json

@app.route("/companyPage/<tickername>")
def companyPage(tickername):
    #features = ['industry', 'revenueGrowth', 'currentPrice', 'marketCap','trailingPE', 'fiftyTwoWeekHigh', 'fiftyTwoWeekLow']
    #ticker_dict ={}
    #ticker = yf.Ticker(tickername)
    #ticker_dict['info'] = ticker.info
    #ticker_dict['financials'] =ticker.financials
    #ticker_dict[]=ticker.
    return 0 #{key: temp[key] for key in features }
if __name__ == '__main__':
    app.run(debug=True)
