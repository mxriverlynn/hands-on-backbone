require 'sinatra'
require 'sinatra/content_for'
require 'erb'
require 'json'
require 'sinatra/reloader' if development?

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  erb :layout
end

