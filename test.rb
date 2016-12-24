require 'open-uri'
require 'nokogiri'

url = 'http://www.jeuxvideo.com/forums/42-51-49498235-1-0-1-0-votre-pere-noel-est-la.htm'

document = open(url)
content = document.read

topic = url[32...-4]
output = File.new(topic + '.txt', 'w+')

parsed_content = Nokogiri::XML(content,&:noblanks)

parsed_content.css('.conteneur-message').each do |msg|
    
    infos   = msg.css('.inner-head-content').css('.bloc-header').inner_html
    message = msg.css('.inner-head-content').css('.bloc-contenu').inner_html

    output.write('-------------------------------------------------------------------------------------')
    output.write("\n")
    output.write(infos)
    output.write(message)
    output.write("\n")

end
