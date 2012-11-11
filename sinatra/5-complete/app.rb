require 'sinatra'
require 'erb'
require 'json'
require 'sinatra/reloader' if development?

get '/' do
  # app homepage
  images = get_images.values
  erb :layout, :locals => {images: images}
end

get '/images' do
  # get list of images
  images = get_images.values
  puts images.inspect
  content_type :json
  images.to_json
end

post '/images' do
  # create
  images = get_images

  image_data = JSON.parse(request.body.read.to_s)
  image = {
    url: image_data["url"],
    name: image_data["name"],
    description: image_data["description"]
  }

  id = (images.keys.max || 0)+1
  image[:id] = id
  images[id] = image

  content_type :json
  image.to_json
end

put '/images/:id' do
  # update
  id = params[:id].to_i

  images = get_images
  image = images[id]

  image_data = JSON.parse(request.body.read.to_s)
  image[:url] = image_data["url"]
  image[:name] = image_data["name"]
  image[:description] = image_data["description"]

  content_type :json
  image.to_json
end

delete '/images/:id' do
  #delete
  id = params[:id].to_i

  images = get_images
  images.delete(id)

  content_type :json
  {}.to_json
end

def get_images
  return settings.images if settings.respond_to?(:images)

  images = {};
  images[1] = {
    id: 1,
    url: "/images/islands.jpeg",
    name: "Some island",
    description: "Some islands at sunset"
  }
  images[2] = {
    id: 2,
    url: "/images/mountain.jpeg",
    name: "A mountain",
    description: "A mountain with a grassy hill and tree in front of it"
  }
  images[3] = {
    id: 3,
    url: "/images/wrench.jpeg",
    name: "A rusty wrench",
    description: "A close up view of a rusty wrence, with great color and texture on it"
  }
  images[4] = {
    id: 4,
    url: "/images/flower.jpeg",
    name: "A purple flower",
    description: "A purple flower with a water drop hanging off another plant"
  }
 
  set :images, images
  return images
end

