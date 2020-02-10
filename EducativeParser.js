var script = document.createElement('script');
script.type = 'text/javascript';
script.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js";
document.head.appendChild(script);
        
( async()=>{
        
              
        setInterval( async ()=>{
        
        var content = document.getElementsByClassName('styles__CompListStyled-sc-16zr3w-0')[0];
        var title = document.getElementsByClassName('PageSummary-sc-19qsvz4-0 eFZrnT')[0];
         await demoFromHTML(content,title);
        let nextButton = document.getElementById('next_lesson');
        

        nextButton.click();
        
       },3000);  
     }
)();

// Convert to PDF: 
async function demoFromHTML(content, title) {
        var pdf = new jsPDF('p', 'pt', 'letter');
        // source can be HTML-formatted string, or a reference
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                // true = "handled elsewhere, bypass text extraction"
                return true
            }
        };
        margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };
        pdf.fromHTML(
        content, 
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },
        function (dispose) {
           pdf.save(title);
        }, margins);
 }
