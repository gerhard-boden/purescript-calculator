module Main where
  
import Prelude
import Data.Foldable (sum)

type Drink =
  { name        :: String
  , percentage  :: Number -- in Vol %
  , amount      :: Number -- in cl (just the good stuff)
  }

type Person = 
  { name        :: String
  , gender      :: String 
  , weight      :: Number -- in kg
  }

-- hours spend drinking (we suggest we can substract 0.1 ‰ per hour.. mathematically this might be controversial, but makes us feel better about our habbit)
hours = 8.00 :: Number 

drinks = [ 
    { name: "Gin"
    , percentage: 40.00 
    , amount: 32.00
    },
    { name: "Jack Daniel's"
    , percentage: 40.00 
    , amount: 4.00
    },
    { name: "Shots"
    , percentage: 40.00 
    , amount: 10.00
    }
] :: Array Drink

testperson =  
    { name: "Gerhard" 
    , gender: "male"
    , weight: 66.00
    } :: Person

-- calculate absolute level of blood alcohol
bloodAlcohol :: Person -> Number
bloodAlcohol person = sum do
    (\drink -> ((drink.amount * 10.00 * (drink.percentage / 100.00) * 0.8) / (person.weight * if person.gender == "male" then 0.68 else 0.55))) <$> drinks

main :: Number
main = bloodAlcohol testperson - (hours * 0.1)