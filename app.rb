require "sinatra"
require "youtube_it"

configure :production do
  require "newrelic_rpm"
end

before do
  @client = YouTubeIt::Client.new
end

get "/" do
  @videos = @client.playlist("PLsB13dE-JieYn9bBim5KhNWWIyg8FqQAA").videos
  @video  = @videos.first

  if request.xhr?
    erb :index, :layout => false
  else
    erb :index
  end
end

get "/videos/:id" do
  @video  = @client.video_by(params[:id])
  @videos = @client.playlist("PLsB13dE-JieYn9bBim5KhNWWIyg8FqQAA").videos

  if request.xhr?
    erb :index, :layout => false
  else
    erb :index
  end
end
