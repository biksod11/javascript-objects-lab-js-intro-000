function updateOnjectWithKeyAndValue(object, key, value){
  return object.assign({}, obj,{[key], value})
}
const recipe = {lemon:4}

updateOnjectWithKeyAndValue(recipe, "chocolate": "0 cups")
