var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({}, object,{[key]:value})
}

updateObjectWithKeyAndValue(recipe, "chocolate": "0 cups")
