/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {




      
    textColor  :{"foot":"#706458B2", "brown":"#A06056","brownLight" :'#706458E5','c':"#706458","d":"#F3EEE8","blackclack":"#121212","iii":"#534B42"},
    fontSize : {"un":"34px" ,"six":'18px','dix':'50px',"douze":'22px','a':'55px','e':'25px' ,"g":"35px","re":"17px"},
    lineHeight : {"deux": "25px",'sept':'25px','onze':'70px','treize':'30.8px',"b":"60px","f":"30px","h":"40px","ss":"60px"},
    width : {'trois':'94px','cinq':'67px','huit':'50px'},
    height : {'quatre':'25px','neuf':'50px'},
    gap : {"quatorze":'1px'},
    backgroundColor : {"first": "#FFFFFF","page":"#F3EEE8"},
    fontFamily : {merri:['Merriweather'],vart:['Varta'],karla:['Karla']}
    },
  },
  plugins: [],
}


