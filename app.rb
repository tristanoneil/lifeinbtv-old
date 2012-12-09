require "sinatra"
require "vimeo"

configure :production do
  require "newrelic_rpm"
end

get "/" do
  @videos = Vimeo::Simple::Album.videos("2087592")
  @video  = @videos.first

  if request.xhr?
    erb :index, :layout => false
  else
    erb :index
  end
end

get "/videos/:id" do
  @video  = Vimeo::Simple::Video.info(params[:id])[0]
  @videos = Vimeo::Simple::Album.videos("2087592")

  if request.xhr?
    erb :index, :layout => false
  else
    erb :index
  end
end
