# eyefind.info
[Live Demo](https://nervous-lovelace-0ff825.netlify.app/)
<p align="center">
  <img width="500" src="./src/media/screenshot.png" alt="screenshot of eyefind.info">
</p>



## A take on a the eyefind.info website used in the Grand Theft Auto series.
* Custom CSS to achieve a look-a-like
* Fetches a few YouTube videos of GTA gameplay

## Fun Story
*This project was origninally using Google Places API to pull up real places around you! I ended up making to many requests (approx 50,000 in two days) because I wanted to fetch **Way** to many places. Would have paid roughly $480 had it not been for the Developer Credits I had. Needless to say, I quickly canceled my API key and moved to simply use YouTube Videos* 

#### **Moral of the Story - Use dummy data when you are still developing and testing your application!**


### Still Needs:
* ~~Links to work~~
* ~~Click on place and go to a dedicated page for that place~~
* Show current location and weather - upper right hand corner
* Be able to set location -if user decides to block geolocation(I wouldn't blame them)
* Search to work - 


### Strech goals
* Create user login
* Allow user to create messages and view inbox (not real email)
* ...

### How it works
~~Its a ReactJS frontend that talks to a NodeJS/Express server. The backend server will request data from the Google's Places API and send it on the the front end.~~

### Usage

* clone the repo
* yarn 
* yarn start








