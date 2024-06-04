export const publicRoutes = [
    "/",
    "/login",
    "/live-attendance"
]


export function OtpTemplate(otp){
    return `<table
    width="100%"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="box-sizing: border-box; background-color: #ededed"
    bgcolor="#ededed"
  >
    <tbody style="box-sizing: border-box">
      <tr style="box-sizing: border-box">
        <td style="box-sizing: border-box">
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="box-sizing: border-box; background-size: auto"
          >
            <tbody style="box-sizing: border-box">
              <tr style="box-sizing: border-box">
                <td style="box-sizing: border-box">
                  <table
                    class="m_7155681901209612699row-content m_7155681901209612699stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      box-sizing: border-box;
                      background-size: auto;
                      background-color: #0F2167;
                      background-image: url(https://admin.edifycit.com/images/eHeader.png);
                      background-repeat: no-repeat;
                      color: #333;
                      width: 600px;
                      margin: 0 auto;
                    "
                    width="600"
                    bgcolor="#001e2b"
                    background="https://ci3.googleusercontent.com/meips/ADKq_NZ2CJ404_TOdyBK92OZn-9MiUbDqxHEZyQ_fEhPQ9E5fA_fXZcOLlhFXNWKTBsrhhumoMFEs21lZj0m4ABzgY3-7d5ILLnFPd9rRKE70kiQXD5KijGRcrGzUiaCWivDwvwFKd3G2gpjuVs1scLSi8s=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/a0bb6db3-a790-476c-a7e2-9adc331f6e15/dark_bg_img.png"
                  >
                    <tbody style="box-sizing: border-box">
                      <tr style="box-sizing: border-box">
                        <td
                          class="m_7155681901209612699column"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                          align="left"
                          valign="top"
                        >
                          <table
                            class="m_7155681901209612699image_block"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="box-sizing: border-box"
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td
                                  style="
                                    box-sizing: border-box;
                                    padding-bottom: 20px;
                                    padding-left: 30px;
                                    padding-right: 30px;
                                    padding-top: 60px;
                                    width: 100%;
                                  "
                                  width="100%"
                                >
                                  <div
                                    align="left"
                                    style="
                                      box-sizing: border-box;
                                      line-height: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        box-sizing: border-box;
                                        max-width: 120px;
                                      "
                                    >
                                      <img
                                        src="https://admin.edifycit.com/images/dlogo.png"
                                        style="
                                          box-sizing: border-box;
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 50px;
                                          margin-left: 18px;
                                        "
                                        width="120"
                                        class="CToWUd"
                                        data-bit="iit"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              box-sizing: border-box;
                              word-break: break-word;
                            "
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td
                                  style="
                                    box-sizing: border-box;
                                    padding-bottom: 5px;
                                    padding-left: 50px;
                                    padding-right: 50px;
                                    padding-top: 36px;
                                  "
                                >
                                  <div
                                    style="
                                      box-sizing: border-box;
                                      font-family: sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        box-sizing: border-box;
                                        font-size: 14px;
                                        font-family: 'Lexend Deca',
                                          sans-serif;
                                        color: #3559E0;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          box-sizing: border-box;
                                          line-height: inherit;
                                          margin: 0;
                                          font-size: 14px;
                                        "
                                      >
                                        <span
                                          style="
                                            box-sizing: border-box;
                                            font-size: 30px;
                                          "
                                          ><span
                                            style="
                                              box-sizing: border-box;
                                              color:#fff;
                                            "
                                            >Email Verification OTP</span
                                          ></span
                                        ><span
                                          style="
                                            box-sizing: border-box;
                                            font-size: 30px;
                                          "
                                          >&nbsp;</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          color: #fff;
                                          font-size: 30px;
                                          margin-top: 20px;
                                          margin-bottom: 0;
                                        "
                                      >
                                        ${otp}
                                      </p>
                                      <p
                                        style="
                                          box-sizing: border-box;
                                          line-height: inherit;
                                          margin: 0;
                                          font-size: 14px;
                                        "
                                      >
                                        &nbsp;
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="box-sizing: border-box; background-color: #ededed"
            bgcolor="#ededed"
          >
            <tbody style="box-sizing: border-box">
              <tr style="box-sizing: border-box">
                <td style="box-sizing: border-box">
                  <table
                    class="m_7155681901209612699row-content m_7155681901209612699stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      box-sizing: border-box;
                      background-color: #0F2167;
                      color: #fff;
                      width: 600px;
                      margin: 0 auto;
                    "
                    width="600"
                    bgcolor="#001e2b"
                  >
                    <tbody style="box-sizing: border-box">
                      <tr style="box-sizing: border-box">
                        <td
                          class="m_7155681901209612699column"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            font-weight: 400;
                            text-align: left;
                            padding-left: 18px;
                            padding-right: 12px;
                            vertical-align: top;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                          align="left"
                          valign="top"
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              box-sizing: border-box;
                              word-break: break-word;
                            "
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td
                                  style="
                                    box-sizing: border-box;
                                    padding-bottom: 10px;
                                    padding-left: 35px;
                                    padding-right: 45px;
                                    padding-top: 20px;
                                  "
                                >
                                  <div
                                    style="
                                      box-sizing: border-box;
                                      font-family: sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        box-sizing: border-box;
                                        font-size: 12px;
                                        font-family: 'Lexend Deca',
                                          sans-serif;
                                        color:#fff;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          box-sizing: border-box;
                                          line-height: inherit;
                                          margin: 0;
                                          font-size: 15px;
                                        "
                                      >
                                        Master the Skills to Drive your
                                        Career. Learn Computer IT Courses
                                        from the World’s Leading experts.
                                        Inaugurate Your Career Today.
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            role="presentation"
                            style="box-sizing: border-box"
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td style="box-sizing: border-box">
                                  <div
                                    align="center"
                                    style="box-sizing: border-box"
                                  >
                                    <a
                                      href="https://edifycit.com"
                                      style="
                                        box-sizing: border-box;
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #00222f;
                                        background-color: #3559E0;
                                        border-radius: 4px;
                                        width: auto;
                                        font-weight: 400;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        font-family: 'Lexend Deca',
                                          sans-serif;
                                        font-size: 16px;
                                        text-align: center;
                                        word-break: keep-all;
                                      "
                                      target="_blank"
                                      data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBp1kHbBxCO2JwehJMamOQrYjMjau7jDALomIRPbCzh-yZWnVYvZDQXbnn4NcYBgLR6QBPH-TmGHmzgkfkG-TJQxi3P_IzrUQxhfbiVT7vKDvtmzvlSQR6LnOixq59-1v1dA4IUNFYvvPQS5t7HpRCUvAEeMsjscbM3Piki4kwn0yf374FNL-MjNVfnlEJ6hxFQLZClDt9vbvBQWQdAyH2NoQPC2VngQO_PdB16G6DVULxJb0KWC81pDrxxnJTtYhLWVyQ7hZMa2R6FLrDXK76KV1WjmH6TnmE1lUJ-ms6-9a90pq_2ZVm7smHZmx7VJ__uXX1Xm83E2WP3L_8TJTN71g2fL55gjfaDKEe1osJcWs&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw0nlSpEnfyIkO-lPxMcgfuY"
                                      ><span
                                        style="
                                          box-sizing: border-box;
                                          padding-left: 20px;
                                          padding-right: 20px;
                                          font-size: 16px;
                                          display: inline-block;
                                          letter-spacing: normal;
                                        "
                                        ><span
                                          style="
                                            box-sizing: border-box;
                                            word-break: break-word;
                                            line-height: 32px;
                                            color:#fff;
                                          "
                                          >Learn more</span
                                        ></span
                                      ></a
                                    >
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="box-sizing: border-box"
          >
            <tbody style="box-sizing: border-box">
              <tr style="box-sizing: border-box">
                <td style="box-sizing: border-box">
                  <table
                    class="m_7155681901209612699row-content m_7155681901209612699stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      box-sizing: border-box;
                      background-color: #0F2167;
                      color: #fff;
                      width: 600px;
                      margin: 0 auto;
                    "
                    width="600"
                    bgcolor="#001e2b"
                  >
                    <tbody style="box-sizing: border-box">
                      <tr style="box-sizing: border-box">
                        <td
                          class="m_7155681901209612699column"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            vertical-align: top;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                          align="left"
                          valign="top"
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              box-sizing: border-box;
                              word-break: break-word;
                            "
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td
                                  style="
                                    box-sizing: border-box;
                                    padding-bottom: 15px;
                                    padding-left: 60px;
                                    padding-right: 45px;
                                    padding-top: 10px;
                                  "
                                >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            role="presentation"
                            style="box-sizing: border-box"
                          ></table>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              box-sizing: border-box;
                              word-break: break-word;
                            "
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td
                                  style="
                                    box-sizing: border-box;
                                    padding-bottom: 15px;
                                    padding-left: 60px;
                                    padding-right: 45px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      box-sizing: border-box;
                                      font-family: sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        box-sizing: border-box;
                                        font-size: 14px;
                                        font-family: 'Lexend Deca',
                                          sans-serif;
                                        color: #555;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          box-sizing: border-box;
                                          line-height: inherit;
                                          margin: 0;
                                          font-size: 15px;
                                          text-align: left;
                                        "
                                      >
                                        <span
                                          style="
                                            box-sizing: border-box;
                                            color:#fff;
                                            font-size: 15px;
                                          "
                                          >Think Big, Go far,</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          box-sizing: border-box;
                                          line-height: inherit;
                                          margin: 0;
                                          font-size: 15px;
                                          text-align: left;
                                        "
                                      >
                                        <span
                                          style="
                                            box-sizing: border-box;
                                            color:#fff;
                                            font-size: 15px;
                                          "
                                          >The Edify College Of IT</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="box-sizing: border-box"
          >
            <tbody style="box-sizing: border-box">
              <tr style="box-sizing: border-box">
                <td style="box-sizing: border-box">
                  <table
                    class="m_7155681901209612699row-content m_7155681901209612699stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      box-sizing: border-box;
                      background-color: #0F2167;
                      color: #fff;
                      background-image: url(https://admin.edifycit.com/images/eFooter.png);
                      background-repeat: no-repeat;
                      width: 600px;
                      margin: 0 auto;
                    "
                    width="600"
                    bgcolor="#001e2b"
                    background="https://ci3.googleusercontent.com/meips/ADKq_NZqJYdahSvuo2shJAJCp0ew-TdKR6cvkATCE5bWHEEnwIEglvLapYg1yVweJE2NBUonxtZAqOEY6Xfg04C6fM9po7jk28DyPCefjvnZOPCLsXD5KzihK0rJAOZ13fytvc2N7s1jbgQa2KpBdjo7f5d2NJ2buOK0uzneNd5vdzrOG4sPOIohB-4gDmob3EjD8ox0yAMgBTYICBsrT2u1IE9pU9VW1EjmD39lijQM5yeyhd7g_v5Y5yXekmeRYlCRb0DDinuRLQuDdpqEiUi6=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/86ba93b39a0e415ea7cd8e8ed81051cd/Footer%20and%20Header%20Images/dark_ftr_bg_img.png"
                  >
                    <tbody style="box-sizing: border-box">
                      <tr style="box-sizing: border-box">
                        <td
                          class="m_7155681901209612699column"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                          align="left"
                          valign="top"
                        >
                          <div
                            style="
                              box-sizing: border-box;
                              height: 25px;
                              line-height: 25px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="box-sizing: border-box"
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td style="box-sizing: border-box">
                                  <div
                                    style="
                                      box-sizing: border-box;
                                      font-family: Helvetica Neue, Helvetica,
                                        Arial, sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  >
                                    <table
                                      align="center"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      style="box-sizing: border-box"
                                    >
                                      <tbody style="box-sizing: border-box">
                                        <tr style="box-sizing: border-box">
                                          <td
                                            align="center"
                                            style="
                                              box-sizing: border-box;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                            valign="middle"
                                          >
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://www.facebook.com/edifycitofficials/"
                                              target="_blank"
                                              ><img
                                                alt="fb"
                                                width="32"
                                                style="
                                                  box-sizing: border-box;
                                                  display: block;
                                                  max-width: 32px;
                                                  font-family: Verdana,
                                                    sans-serif;
                                                  font-size: 10px;
                                                  line-height: 20px;
                                                  color: #001e2b;
                                                "
                                                border="0"
                                                src="https://ci3.googleusercontent.com/meips/ADKq_NayerVjQCDQ-Gcu56gXUfHRxVOaZSKUWFwlZ-KNHjFo_1BPhGNp-qox0ZD_udVtwP7o-ZaXBwnUo1eCQvwrzfGoW4u5uihEfiDvtHRsuL9UvorvCWhURhxxbTW_vb3I2Cx0_lxdDsUE4oAHHmZs-S8=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/21b5e5ec-e620-47ad-8956-f6d08dd672f4/dark_fb_img.png"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                            <div
                                              style="
                                                box-sizing: border-box;
                                                display: none;
                                                overflow: hidden;
                                                float: left;
                                                width: 0px;
                                                max-height: 0px;
                                                max-width: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <a
                                                style="
                                                  box-sizing: border-box;
                                                  text-decoration: none;
                                                "
                                                href="https://www.facebook.com/edifycitofficials/"
                                                target="_blank"
                                                data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBngU89uesd6PYShNBNAm7aDeUBt1WqVbrx1FelU91vrBHiVQOLtgyFxAT7AjcXfnTPTKCFEZy9hYy0cpKboRsjZeh6VekqgWn6A4sdLyRRLs_XsxiGAh0U3OKID2GIzeTeF90vjtZWv54BOwD_SSeCjW3whMl8zbzs2QeRyEe1ewPHtxDzkOGQgaH-7zwBTKowVSLktS4jTM94EMTQcBUm2jVOiokE4a9H4YV2oyt6vxnTC2NJimsQdCyO3uX0FVb_x9tfkGNYqa4W38K-b_z07pyYin9q8y7qx-ZoICQB_t&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw2aNVxhju75DQ9ENV4F977H"
                                                ><img
                                                  alt="fb"
                                                  border="0"
                                                  style="
                                                    box-sizing: border-box;
                                                    display: block;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 20px;
                                                    line-height: 30px;
                                                    color:#fff;
                                                    max-width: 32px;
                                                  "
                                                  width="32"
                                                  src="https://ci3.googleusercontent.com/meips/ADKq_NayerVjQCDQ-Gcu56gXUfHRxVOaZSKUWFwlZ-KNHjFo_1BPhGNp-qox0ZD_udVtwP7o-ZaXBwnUo1eCQvwrzfGoW4u5uihEfiDvtHRsuL9UvorvCWhURhxxbTW_vb3I2Cx0_lxdDsUE4oAHHmZs-S8=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/21b5e5ec-e620-47ad-8956-f6d08dd672f4/dark_fb_img.png"
                                                  class="CToWUd"
                                                  data-bit="iit"
                                              /></a>
                                            </div>
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBngU89uesd6PYShNBNAm7aDeUBt1WqVbrx1FelU91vrBHiVQOLtgyFxAT7AjcXfnTPTKCFEZy9hYy0cpKboRsjZeh6VekqgWn6A4sdLyRRLs_XsxiGAh0U3OKID2GIzeTeF90vjtZWv54BOwD_SSeCi7mpXTB2aW10EhSEe29zNcpclT5CzgIqdVXp8Tfc-TTfLs7Cu8VR518lO9Al0RiE61zH3I9bEC8Q8Tlvf0M_7EAvZxJkUhr84vjXnbsD5jxE0fu1hZEjEMkHXDv7fkvfXGsMSQEjT_WJ5wj8dUB2XmdbK8d9HJWvUA62iIg2KWlA%3D%3D"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBngU89uesd6PYShNBNAm7aDeUBt1WqVbrx1FelU91vrBHiVQOLtgyFxAT7AjcXfnTPTKCFEZy9hYy0cpKboRsjZeh6VekqgWn6A4sdLyRRLs_XsxiGAh0U3OKID2GIzeTeF90vjtZWv54BOwD_SSeCi7mpXTB2aW10EhSEe29zNcpclT5CzgIqdVXp8Tfc-TTfLs7Cu8VR518lO9Al0RiE61zH3I9bEC8Q8Tlvf0M_7EAvZxJkUhr84vjXnbsD5jxE0fu1hZEjEMkHXDv7fkvfXGsMSQEjT_WJ5wj8dUB2XmdbK8d9HJWvUA62iIg2KWlA%253D%253D&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw2rnLcAfFwbgdQSPUQQGM3n"
                                            ></a>
                                          </td>
                                          <td
                                            width="24"
                                            style="
                                              box-sizing: border-box;
                                              width: 24px;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                          ></td>
                                          <td
                                            align="center"
                                            style="
                                              box-sizing: border-box;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                            valign="middle"
                                          >
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://www.youtube.com/@edifycit"
                                              target="_blank"
                                              ><img
                                                alt="yt"
                                                width="32"
                                                style="
                                                  box-sizing: border-box;
                                                  display: block;
                                                  max-width: 32px;
                                                  font-family: Verdana,
                                                    sans-serif;
                                                  font-size: 10px;
                                                  line-height: 20px;
                                                  color: #001e2b;
                                                "
                                                border="0"
                                                src="https://ci3.googleusercontent.com/meips/ADKq_NYDMAXX8U-LgMKKQPgFqUWv2vQQb_apFCDLj0FMO35TronE88-4bvvS0aqSwifb-dTDtSYtRZ6vAbb0kDGwU3BDYZ6sM4xFmSsyb_UR9qAqfF06kVyqwIozaa62Ly_CDV02N70zLb8SD4xOLzVfV-o=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/0747363c-a7d0-4f00-babf-af83bc503f09/dark_yt_img.png"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                            <div
                                              style="
                                                box-sizing: border-box;
                                                display: none;
                                                overflow: hidden;
                                                float: left;
                                                width: 0px;
                                                max-height: 0px;
                                                max-width: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <a
                                                style="
                                                  box-sizing: border-box;
                                                  text-decoration: none;
                                                "
                                                href="https://www.youtube.com/@edifycit"
                                                target="_blank"
                                                ><img
                                                  alt="yt"
                                                  border="0"
                                                  style="
                                                    box-sizing: border-box;
                                                    display: block;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 20px;
                                                    line-height: 30px;
                                                    color:#fff;
                                                    max-width: 32px;
                                                  "
                                                  width="32"
                                                  src="https://ci3.googleusercontent.com/meips/ADKq_NYDMAXX8U-LgMKKQPgFqUWv2vQQb_apFCDLj0FMO35TronE88-4bvvS0aqSwifb-dTDtSYtRZ6vAbb0kDGwU3BDYZ6sM4xFmSsyb_UR9qAqfF06kVyqwIozaa62Ly_CDV02N70zLb8SD4xOLzVfV-o=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/0747363c-a7d0-4f00-babf-af83bc503f09/dark_yt_img.png"
                                                  class="CToWUd"
                                                  data-bit="iit"
                                              /></a>
                                            </div>
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBiUFGavsswL72zxNwwkaU6NFH2DAXDKEIqn5pqwZtfzFESwDoBNCghNQSZgYVRne9WvMUUy1QQwaXyJAYij8tq9wmV82l23i_M3E0h7zUR8byvcMHOdqD1LEAeyFcBFMzEl0D3Zh1m2mVUtKVS4z3W6kLAzMAxYNNUwMSCgMBwvETzQJYNheVhtPsVHq6VQ2vs3b60-tcF_QVwJ-IVj5KksPAIBVqli9cNhnYXkFDNJGTgYM2HN-DJrtwxCcJ2sLMtlPkzk-LD8xpWHUXIOjTATvrs75IS4yp-k-KHkWkU3jz5KSa5MmTFNkfN-s4GSfOQ%3D%3D"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBiUFGavsswL72zxNwwkaU6NFH2DAXDKEIqn5pqwZtfzFESwDoBNCghNQSZgYVRne9WvMUUy1QQwaXyJAYij8tq9wmV82l23i_M3E0h7zUR8byvcMHOdqD1LEAeyFcBFMzEl0D3Zh1m2mVUtKVS4z3W6kLAzMAxYNNUwMSCgMBwvETzQJYNheVhtPsVHq6VQ2vs3b60-tcF_QVwJ-IVj5KksPAIBVqli9cNhnYXkFDNJGTgYM2HN-DJrtwxCcJ2sLMtlPkzk-LD8xpWHUXIOjTATvrs75IS4yp-k-KHkWkU3jz5KSa5MmTFNkfN-s4GSfOQ%253D%253D&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw1z7-QnGBeAgyMl7w8bw0vv"
                                            ></a>
                                          </td>
                                          <td
                                            width="24"
                                            style="
                                              box-sizing: border-box;
                                              width: 24px;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                          ></td>
                                          <td
                                            align="center"
                                            style="
                                              box-sizing: border-box;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                            valign="middle"
                                          >
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://twitter.com/EdifyCIT/"
                                              target="_blank"
                                              ><img
                                                alt="tw"
                                                width="32"
                                                style="
                                                  box-sizing: border-box;
                                                  display: block;
                                                  max-width: 32px;
                                                  font-family: Verdana,
                                                    sans-serif;
                                                  font-size: 10px;
                                                  line-height: 20px;
                                                  color: #001e2b;
                                                "
                                                border="0"
                                                src="https://ci3.googleusercontent.com/meips/ADKq_NZMnwnq-t5aIrdwKrhjhnRpiyXXdA1n9FPZJ_SCPvIYPhBGPAVEXnxUbGCay13SIWnJFByTFyj7IHr9_Dk8oRPpc-SUp2sW0_7mIXpEc5rkMdKUbmz-rNHww_WRyfpjhv4NRwMKID5wnlqnIUyh_N4=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/f157229f-c271-422c-a8c1-5564e3226cf0/dark_tw_img.png"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                            <div
                                              style="
                                                box-sizing: border-box;
                                                display: none;
                                                overflow: hidden;
                                                float: left;
                                                width: 0px;
                                                max-height: 0px;
                                                max-width: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <a
                                                style="
                                                  box-sizing: border-box;
                                                  text-decoration: none;
                                                "
                                                href="https://twitter.com/EdifyCIT/"
                                                target="_blank"
                                                data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBijvwuW_iKjOOEVhYAOxw1Q7uPGdLZBd-nT1CP21v4iF-8hMS9QCSdzJ-5STTig6S0_F8kdNaQ9W2P_3JdI1ipRcsJhChrCuCA9VtPFxAr-UgDUUA5eqQzfr2rWEM5G58l13RLDCayXnwlkg79BJqAnGCMcZ5m4AtRd9Bpp1OVTau0W7RkpGDdySx7Zp871fQHOMtp0BgltRT6rzf0ArSS69ABPQDxNj9OjYnNCFTmg8N6MBSVZqHIzo-Zou42H1q3lcXqTLGg8amPcoc_O11EfFW5ylB_VBuxKiSANwaOr2&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw1YTCrfO1CWsxmsrSZvrDfm"
                                                ><img
                                                  alt="tw"
                                                  border="0"
                                                  style="
                                                    box-sizing: border-box;
                                                    display: block;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 20px;
                                                    line-height: 30px;
                                                    color:#fff;
                                                    max-width: 32px;
                                                  "
                                                  width="32"
                                                  src="https://ci3.googleusercontent.com/meips/ADKq_NZMnwnq-t5aIrdwKrhjhnRpiyXXdA1n9FPZJ_SCPvIYPhBGPAVEXnxUbGCay13SIWnJFByTFyj7IHr9_Dk8oRPpc-SUp2sW0_7mIXpEc5rkMdKUbmz-rNHww_WRyfpjhv4NRwMKID5wnlqnIUyh_N4=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/f157229f-c271-422c-a8c1-5564e3226cf0/dark_tw_img.png"
                                                  class="CToWUd"
                                                  data-bit="iit"
                                              /></a>
                                            </div>
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBijvwuW_iKjOOEVhYAOxw1Q7uPGdLZBd-nT1CP21v4iF-8hMS9QCSdzJ-5STTig6S0_F8kdNaQ9W2P_3JdI1ipRcsJhChrCuCA9VtPFxAr-UgDUUA5eqQzfr2rWEM5G58l13RLDCayXnwlkg79BJqAnwTz_ebWb-lsQw5wiNCxzodElVe9l5QKvUGBsD4EqIycKKu0fdVzSjk5nwXxb1JtbnScfvBR1z0bR1h0dinV-NsNpPLni-Z5ASCSRDHwT2cMRH9VqLVgm-Asyw88BgSe276i_xJU6RoGP8_fNrgzqo"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBijvwuW_iKjOOEVhYAOxw1Q7uPGdLZBd-nT1CP21v4iF-8hMS9QCSdzJ-5STTig6S0_F8kdNaQ9W2P_3JdI1ipRcsJhChrCuCA9VtPFxAr-UgDUUA5eqQzfr2rWEM5G58l13RLDCayXnwlkg79BJqAnwTz_ebWb-lsQw5wiNCxzodElVe9l5QKvUGBsD4EqIycKKu0fdVzSjk5nwXxb1JtbnScfvBR1z0bR1h0dinV-NsNpPLni-Z5ASCSRDHwT2cMRH9VqLVgm-Asyw88BgSe276i_xJU6RoGP8_fNrgzqo&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw0rkKRm0P1LuQnl-h0Hfb1f"
                                            ></a>
                                          </td>
                                          <td
                                            width="24"
                                            style="
                                              box-sizing: border-box;
                                              width: 24px;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                          ></td>
                                          <td
                                            align="center"
                                            style="
                                              box-sizing: border-box;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                            valign="middle"
                                          >
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://www.linkedin.com/company/edify-college-of-it"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBlBPRoN9OJ_T0WslsMAFH-BX0CDpdwkmb-XFn21OQMVV0P25R92CSRPoQkyV6LCNyg0crwBlvamU6eJ0vqGr1bBFUj6kRIlfVVPDahJ9aMXmZJm_iqm6e_bB3rxKFKhrB5uQkH9qFqVY0x6RE2nBF2xO1uM8V5HYuThQJOjjT3kI2grd8J1l9uZICn_C5nhRjOlLeyMuUNX1vDrmcy3dBDvtT9CO4Bljx78osIjgzEZyLWN5GESLF-QmV5nhnBxmKAtJGEl538FgmTx8Yn1V8O_HypTUWlyS7OH0JtEcawo4d4jjywDxNGxY3rHJn7FyP8pE4yXhHBsrFEZWjV3741I%253D&amp;source=gmail&amp;ust=1702809273998000&amp;usg=AOvVaw2ctQpb_QqtcF_ShhrWYLdO"
                                              ><img
                                                alt="in"
                                                width="32"
                                                style="
                                                  box-sizing: border-box;
                                                  display: block;
                                                  max-width: 32px;
                                                  font-family: Verdana,
                                                    sans-serif;
                                                  font-size: 10px;
                                                  line-height: 20px;
                                                  color: #001e2b;
                                                "
                                                border="0"
                                                src="https://ci3.googleusercontent.com/meips/ADKq_NYrXRMgMCnhY-qzAKrz4qYJRrhAlsUi1478ag9sXahkPb5pfFm1Z5r1yVhTFS1k2nb6DisXdYzONewXC515yiNP1R3rehehwZ3K9DM6pffRTSYMO1ZxPtkRSzfNe947bi3G9uDNd6khy4fuj1JXLIA=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/dd2480cb-df51-46af-ae29-c375c8c80757/dark_in_img.png"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                            <div
                                              style="
                                                box-sizing: border-box;
                                                display: none;
                                                overflow: hidden;
                                                float: left;
                                                width: 0px;
                                                max-height: 0px;
                                                max-width: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <a
                                                style="
                                                  box-sizing: border-box;
                                                  text-decoration: none;
                                                "
                                                href="https://www.linkedin.com/company/edify-college-of-it"
                                                target="_blank"
                                                data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBlBPRoN9OJ_T0WslsMAFH-BX0CDpdwkmb-XFn21OQMVV0P25R92CSRPoQkyV6LCNyg0crwBlvamU6eJ0vqGr1bBFUj6kRIlfVVPDahJ9aMXmZJm_iqm6e_bB3rxKFKhrB5uQkH9qFqVY0x6RE2nBF2xO1uM8V5HYuThQJOjjT3kIdusumvhoSbSOQPp_WC4_iCkJrytx6yJBJn3f-vR--vso2AVGE9J5giEY6IBf5Hvcixxj6T7sIgAgUUZiuor7JASFXlrltAEHj5XnunKuxgVyNPoeZIVUJCZ6IgJEtgcJlFK0jrjZoN9u8eOxaeNfal6zyGFN39ODMc_Mb1TlpIM%253D&amp;source=gmail&amp;ust=1702809273999000&amp;usg=AOvVaw1nZa-oN7-MLgyz8YoEtNDm"
                                                ><img
                                                  alt="in"
                                                  border="0"
                                                  style="
                                                    box-sizing: border-box;
                                                    display: block;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 20px;
                                                    line-height: 30px;
                                                    color:#fff;
                                                    max-width: 32px;
                                                  "
                                                  width="32"
                                                  src="https://ci3.googleusercontent.com/meips/ADKq_NYrXRMgMCnhY-qzAKrz4qYJRrhAlsUi1478ag9sXahkPb5pfFm1Z5r1yVhTFS1k2nb6DisXdYzONewXC515yiNP1R3rehehwZ3K9DM6pffRTSYMO1ZxPtkRSzfNe947bi3G9uDNd6khy4fuj1JXLIA=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/dd2480cb-df51-46af-ae29-c375c8c80757/dark_in_img.png"
                                                  class="CToWUd"
                                                  data-bit="iit"
                                              /></a>
                                            </div>
                                            <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBlBPRoN9OJ_T0WslsMAFH-BX0CDpdwkmb-XFn21OQMVV0P25R92CSRPoQkyV6LCNyg0crwBlvamU6eJ0vqGr1bBFUj6kRIlfVVPDahJ9aMXmZJm_iqm6e_bB3rxKFKhrB5uQkH9qFqVY0x6RE2nBF2xO1uM8V5HYuThQJOjjT3kIZU3UqyfNnSnjQ7xPEgtnKFbAOHxn6yorJOc5FwNsFDBmasdzId7kKjKYajBgshytv-11X18GrxzbUKyuwq2N9yrDN5EPM5WOSM2yBQMmmc77ETg4AWidjR_iZc37Z4LF7LmIQCr4mlcIqGYCEjeCSoU-zBXx9JI7vZL6Q8_fhdI%3D"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBlBPRoN9OJ_T0WslsMAFH-BX0CDpdwkmb-XFn21OQMVV0P25R92CSRPoQkyV6LCNyg0crwBlvamU6eJ0vqGr1bBFUj6kRIlfVVPDahJ9aMXmZJm_iqm6e_bB3rxKFKhrB5uQkH9qFqVY0x6RE2nBF2xO1uM8V5HYuThQJOjjT3kIZU3UqyfNnSnjQ7xPEgtnKFbAOHxn6yorJOc5FwNsFDBmasdzId7kKjKYajBgshytv-11X18GrxzbUKyuwq2N9yrDN5EPM5WOSM2yBQMmmc77ETg4AWidjR_iZc37Z4LF7LmIQCr4mlcIqGYCEjeCSoU-zBXx9JI7vZL6Q8_fhdI%253D&amp;source=gmail&amp;ust=1702809273999000&amp;usg=AOvVaw2uPPOa3OsaE6ctwLlgYOLO"
                                            ></a>
                                          </td>
                                          <td
                                            width="24"
                                            style="
                                              box-sizing: border-box;
                                              width: 24px;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                          ></td>
                                          <td
                                            align="center"
                                            style="
                                              box-sizing: border-box;
                                              line-height: 0px;
                                              font-size: 0px;
                                            "
                                            valign="middle"
                                          >
                                            <!-- <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBkgYst_FXbAJNtJ6cGp6zJWyhetFoKqgend-NWs3F_qf08Cmbh4frrgWaPGzgnkkHzShR6EWP8HMbIToHClfUwHxf-uWC9kI17XnLPbcIwhzatviu0ALxfQrSkKXa6agJrRregKn-DM_ETRSTiSXZ4CYB0UAvVZkKg0KD9a-FMKb3LFTqzbHZkr_LY7QM3U6qH1c66xbEQ37vHzyUdsrVH2Kz9xskG-8b3Q7pIDcyfIvtOO7WM6dNt0a03UpYgM207L97oF-JbZB04mgPSyeIN1LL6wnZG-ABUneqNFI6pgv2lmg19nYfyQ9g7lZBEzOdQ%3D%3D"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBkgYst_FXbAJNtJ6cGp6zJWyhetFoKqgend-NWs3F_qf08Cmbh4frrgWaPGzgnkkHzShR6EWP8HMbIToHClfUwHxf-uWC9kI17XnLPbcIwhzatviu0ALxfQrSkKXa6agJrRregKn-DM_ETRSTiSXZ4CYB0UAvVZkKg0KD9a-FMKb3LFTqzbHZkr_LY7QM3U6qH1c66xbEQ37vHzyUdsrVH2Kz9xskG-8b3Q7pIDcyfIvtOO7WM6dNt0a03UpYgM207L97oF-JbZB04mgPSyeIN1LL6wnZG-ABUneqNFI6pgv2lmg19nYfyQ9g7lZBEzOdQ%253D%253D&amp;source=gmail&amp;ust=1702809273999000&amp;usg=AOvVaw05dfi3UGsh24TVJu8B6bIQ"
                                              ><img
                                                alt="st"
                                                width="32"
                                                style="
                                                  box-sizing: border-box;
                                                  display: block;
                                                  max-width: 32px;
                                                  font-family: Verdana,
                                                    sans-serif;
                                                  font-size: 10px;
                                                  line-height: 20px;
                                                  color: #001e2b;
                                                "
                                                border="0"
                                                src="https://ci3.googleusercontent.com/meips/ADKq_NZUHHneLhy6lo1lDudiwZIrSjx2RissTDMGsUMRoAug5QQJ_3M7NmEl7ZvIaGCtDEAxFkj9seDqwIvd4TmlThAZ_ixKyd1vLagXRXbcD4ToVoHLsNyPpsC0cbhRtqWQ9GRiHM5jOu3W7pNUqsgRBCU=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/e11ee525-1d44-402c-8dec-857603ec219b/dark_st_img.png"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a> -->
                                            <div
                                              style="
                                                box-sizing: border-box;
                                                display: none;
                                                overflow: hidden;
                                                float: left;
                                                width: 0px;
                                                max-height: 0px;
                                                max-width: 0px;
                                                line-height: 0px;
                                              "
                                            >
                                              <!-- <a
                                                style="
                                                  box-sizing: border-box;
                                                  text-decoration: none;
                                                "
                                                href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBkgYst_FXbAJNtJ6cGp6zJWyhetFoKqgend-NWs3F_qf08Cmbh4frrgWaPGzgnkkHzShR6EWP8HMbIToHClfUwHxf-uWC9kI17XnLPbcIwhzatviu0ALxfQrSkKXa6agJrRregKn-DM_ETRSTiSXZ4CYB0UAvVZkKg0KD9a-FMKb71Tw0xwLnSh7hRjuzbM3HKT2n4KjCDyQpJsNv9PMZjsf1hiYn-gSvt6YPHLHs_vzYcX6sMFjSgTAhx697-pynoopPYOnAszLP5OwTQzLcmYZfPvSgt5-pSVqf9sLKQmhlJbBy5euXw4FvMMC8JZ7fQ%3D%3D"
                                                target="_blank"
                                                data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBkgYst_FXbAJNtJ6cGp6zJWyhetFoKqgend-NWs3F_qf08Cmbh4frrgWaPGzgnkkHzShR6EWP8HMbIToHClfUwHxf-uWC9kI17XnLPbcIwhzatviu0ALxfQrSkKXa6agJrRregKn-DM_ETRSTiSXZ4CYB0UAvVZkKg0KD9a-FMKb71Tw0xwLnSh7hRjuzbM3HKT2n4KjCDyQpJsNv9PMZjsf1hiYn-gSvt6YPHLHs_vzYcX6sMFjSgTAhx697-pynoopPYOnAszLP5OwTQzLcmYZfPvSgt5-pSVqf9sLKQmhlJbBy5euXw4FvMMC8JZ7fQ%253D%253D&amp;source=gmail&amp;ust=1702809273999000&amp;usg=AOvVaw17pmho8NvmwTlisGXNyez_"
                                                ><img
                                                  alt="st"
                                                  border="0"
                                                  style="
                                                    box-sizing: border-box;
                                                    display: block;
                                                    font-family: Arial,
                                                      sans-serif;
                                                    font-size: 20px;
                                                    line-height: 30px;
                                                    color:#fff;
                                                    max-width: 32px;
                                                  "
                                                  width="32"
                                                  src="https://ci3.googleusercontent.com/meips/ADKq_NZUHHneLhy6lo1lDudiwZIrSjx2RissTDMGsUMRoAug5QQJ_3M7NmEl7ZvIaGCtDEAxFkj9seDqwIvd4TmlThAZ_ixKyd1vLagXRXbcD4ToVoHLsNyPpsC0cbhRtqWQ9GRiHM5jOu3W7pNUqsgRBCU=s0-d-e1-ft#https://d2axdqolvqmdvx.cloudfront.net/e11ee525-1d44-402c-8dec-857603ec219b/dark_st_img.png"
                                                  class="CToWUd"
                                                  data-bit="iit"
                                              /></a> -->
                                            </div>
                                            <!-- <a
                                              style="
                                                box-sizing: border-box;
                                                text-decoration: none;
                                              "
                                              href="https://email.mongodb.com/u/click?_t=86ba93b39a0e415ea7cd8e8ed81051cd&amp;_m=3fa68ed77d394569b68eaf5a738f096f&amp;_e=GXzLR9vxC9q-tep2Sb-tBkgYst_FXbAJNtJ6cGp6zJWyhetFoKqgend-NWs3F_qf08Cmbh4frrgWaPGzgnkkHzShR6EWP8HMbIToHClfUwHxf-uWC9kI17XnLPbcIwhzatviu0ALxfQrSkKXa6agJrRregKn-DM_ETRSTiSXZ4CYB0UAvVZkKg0KD9a-FMKbgpiHhWHqyvuMDUgohRdxbxrxuURnqY6dp-HQ4CyXhbG2DbtXqshV9DaKc_BFpgLawKXiDzKSvwaa2f0-nxFR8gb1_HH0lAk32xRCiP2Xbv9ENJsxYF4O8Qr7dzyKBtCOxmBNysqpkdiNJDpUu-pVdQ%3D%3D"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.mongodb.com/u/click?_t%3D86ba93b39a0e415ea7cd8e8ed81051cd%26_m%3D3fa68ed77d394569b68eaf5a738f096f%26_e%3DGXzLR9vxC9q-tep2Sb-tBkgYst_FXbAJNtJ6cGp6zJWyhetFoKqgend-NWs3F_qf08Cmbh4frrgWaPGzgnkkHzShR6EWP8HMbIToHClfUwHxf-uWC9kI17XnLPbcIwhzatviu0ALxfQrSkKXa6agJrRregKn-DM_ETRSTiSXZ4CYB0UAvVZkKg0KD9a-FMKbgpiHhWHqyvuMDUgohRdxbxrxuURnqY6dp-HQ4CyXhbG2DbtXqshV9DaKc_BFpgLawKXiDzKSvwaa2f0-nxFR8gb1_HH0lAk32xRCiP2Xbv9ENJsxYF4O8Qr7dzyKBtCOxmBNysqpkdiNJDpUu-pVdQ%253D%253D&amp;source=gmail&amp;ust=1702809273999000&amp;usg=AOvVaw2gb9NLPIdZ4uTc-IQWNLhZ"
                                            ></a> -->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              box-sizing: border-box;
                              word-break: break-word;
                            "
                          >
                            <tbody>
                              <tr style="box-sizing: border-box">
                                <td
                                  style="
                                    box-sizing: border-box;
                                    padding-bottom: 25px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    padding-top: 25px;
                                  "
                                >
                                  <div
                                    style="
                                      box-sizing: border-box;
                                      color:#fff;
                                      direction: ltr;
                                      font-family: 'Lexend Deca', sans-serif;
                                      font-size: 11px;
                                      font-weight: 400;
                                      letter-spacing: 0;
                                      line-height: 120%;
                                      text-align: center;
                                    "
                                  >
                                    <p
                                      style="
                                        box-sizing: border-box;
                                        line-height: inherit;
                                        margin: 0;
                                        margin-bottom: 0;
                                      "
                                    >
                                      Copyright © 2023 Edifycit, All rights
                                      reserved.
                                    </p>
                                    <p
                                      style="
                                        box-sizing: border-box;
                                        line-height: inherit;
                                        margin: 0;
                                        margin-bottom: 0;
                                      "
                                    >
                                    Susan Road | Fasialabad, 4th Floor , Punjab, Pakistan<br
                                        style="box-sizing: border-box"
                                      />
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- <div
                            style="
                              box-sizing: border-box;
                              height: 25px;
                              line-height: 25px;
                              font-size: 1px;
                            "
                          >
                             
                          </div> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`
}