import { jsPDF } from "jspdf";             // 1. Fixed: Added curly braces around jsPDF
import autoTable from "jspdf-autotable"; 

const generatePDF = (tableRows, columns, isLandscape) => {
  // 2. Now doc will be instantiated correctly with its internal properties
  const doc = new jsPDF({ orientation: isLandscape ? "landscape" : 'portrait' });

  autoTable(doc, { 
    head: columns,
    body: tableRows,
    startY: 20,
    headStyles: { fillColor: [241, 196, 15], fontSize: 12, halign: 'center' }, // Fixed syntax error here
    columnStyles: { 
      0: { cellWidth: 30, cellHeight: 20, halign: 'center' }, 
      1: { cellWidth: 40, halign: 'center' }, 
      2: { cellWidth: 'auto', halign: 'center', fontStyle: 'bold' }, 
      3: { cellWidth: 20, halign: 'center' }, 
      4: { cellWidth: 30, halign: 'center' } 
    },
    styles: { valign: 'middle' },
    didParseCell: function (data) { 
      if(data.section === 'body') { data.row.height = 20; }
      if (data.column.dataKey === 'poster') { data.cell.text = ''; }
    },
    willDrawCell: function (data) { 
      if (data.row.section === 'body' && data.column.dataKey === 'available') { 
        if (data.cell.raw === 'KO') { doc.setTextColor(231, 76, 60); }
      } 
    },
    didDrawCell: function (data) { 
      if (data.row.section === 'body' && data.column.dataKey === 'poster' && data.cell.raw) { 
        doc.addImage(data.cell.raw, 'PNG', data.cell.x + 5, data.cell.y + 2, 13, 16);
      } 
    }
  });

  doc.save(`movies.pdf`);
};

export default generatePDF;
