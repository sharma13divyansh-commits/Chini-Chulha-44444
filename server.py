
import http.server, socketserver, os
os.chdir(r"c:\Users\admin\.gemini\Designer Vandana\Chini Chulha")
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({'.js': 'application/javascript', '.css': 'text/css'})
with socketserver.TCPServer(("", 8085), Handler) as httpd:
    httpd.serve_forever()
