import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "./Resume.css";
import samplePDF from '../resources/pdf/resume.pdf';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume-container">
                {/*<a className="download-button" href="/resume.pdf" target="_blank" download>Download PDF</a>*/}
                <div className="resume">
                    <Document
                        file={samplePDF}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>

        );
    }
}

export default Resume;
