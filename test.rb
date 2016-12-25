require 'open-uri'
require 'nokogiri'

url = 'http://www.jeuxvideo.com/forums/42-51-49498235-1-0-1-0-votre-pere-noel-est-la.htm'

document = open(url)
content = document.read

topic = url[32...-4]
output = File.new(topic + '.txt', 'w+')

parsed_content = Nokogiri::XML(content,&:noblanks)

parsed_content.css('.conteneur-message').each do |msg|

    auteur  = msg.css('.inner-head-content').css('.bloc-header').css('.bloc-pseudo-msg').inner_text.strip
    avatar  = msg.css('.back-img-msg div a')
    date    = msg.css('.inner-head-content').css('.bloc-header').css('.bloc-date-msg').inner_text.strip
    message = msg.css('.inner-head-content').css('.bloc-contenu').css('.txt-msg').inner_text


    output.write('-------------------------------------------------------------------------------------')
    output.write("\n")
    output.write(auteur)
    output.write("\n")
    output.write(avatar)
    output.write("\n")
    output.write(date)
    output.write("\n")
    output.write(message)
    output.write("\n")

end
