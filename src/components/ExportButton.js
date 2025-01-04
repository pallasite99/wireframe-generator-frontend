import React from 'react';
import jsPDF from 'jspdf';

const ExportButton = ({ wireframe }) => {
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text(JSON.stringify(wireframe, null, 2), 10, 10);
        doc.save('wireframe.pdf');
    };

    return (
        <button onClick={exportToPDF} className="export-button">
            Export to PDF
        </button>
    );
};

export default ExportButton;
