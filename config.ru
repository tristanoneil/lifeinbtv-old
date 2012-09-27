configure :production do
  require "newrelic_rpm"
end

require "./app"

run Sinatra::Application
