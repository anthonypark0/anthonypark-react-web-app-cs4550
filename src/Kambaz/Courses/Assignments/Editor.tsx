export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
          
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assignment Group</label>
          </td>
          <td>
            <select id="wd-select-assignment-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
            <select id="wd-select-display-grade">
                <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
            <select id="wd-select-submission-type">
                <option value="Online">Online</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points"> Online Entry Options</label>
          </td>
          <td>
            <input type = "checkbox" name= "check-options" id="wd-chkbox-text-entry"/>
            <label htmlFor = "wd-chkbox-text-entry">Text Entry</label><br/>
            <input type = "checkbox" name= "check-options" id="wd-chkbox-website-url"/>
            <label htmlFor = "wd-chkbox-website-url">Website URL</label><br/>
            <input type = "checkbox" name= "check-options" id="wd-chkbox-media-recordings"/>
            <label htmlFor = "wd-chkbox-media-recordings">Media Recordings</label><br/>
            <input type = "checkbox" name= "check-options" id="wd-chkbox-student-annotation"/>
            <label htmlFor = "wd-chkbox-student-annotation">Student Annotation</label><br/>
            <input type = "checkbox" name= "check-options" id="wd-chkbox-file-uploads"/>
            <label htmlFor = "wd-chkbox-file-uploads">File Uploads</label><br/>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign to</label>
          </td>
          <td>
            <input id="wd-assign" value={"Everyone"} />
          </td>
          
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due">Due</label>
          </td>
          <td>
            <input type="date" value="2024-05-13" id="wd-text-fields-dob"/><br/>
          </td>
          
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available">Available from</label>
          </td>
          <td>
            <input type="date" value="2024-05-06" id="wd-text-fields-dob"/><br/>
          </td>
          
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-until">Until</label>
          </td>
          <td>
            <input type="date" value="2024-05-20" id="wd-text-fields-dob"/><br/>
          </td>
          
        </tr>

        <button> Cancel</button> <button> Save </button>
      </table>
    </div>
);}
  