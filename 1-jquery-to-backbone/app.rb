require 'sinatra'
require 'sinatra/content_for'
require 'erb'
require 'json'
require 'sinatra/reloader' if development?

set :public, File.dirname(__FILE__) + '/public'

get '/' do
  erb :layout
end

