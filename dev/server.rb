require 'webrick'

class Server < WEBrick::HTTPServer
  def service(req, res)
    super
    res['Expires'] = Time.now.gmtime.strftime("%a, %d %b %Y %H:%M:%S GMT")
  end
end

root = File.expand_path('../')
server = Server.new(Port: 3001, DocumentRoot: root)

trap('INT') { server.shutdown } # Ctrl-C to stop

server.start