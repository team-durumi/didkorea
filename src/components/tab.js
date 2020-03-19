import React from 'react'

export default function Tab({ series }) {
  // return (
  //   <>
  //     <nav>
  //       <div className="nav nav-tabs" id="nav-tab" role="tablist">
  //         <a className="nav-item nav-link active" id="nav-tab-01" data-toggle="tab" href="#nav-01" role="tab" aria-controls="nav-tab-01" aria-selected="true">01 Standard Roller Chain</a>
  //         <a className="nav-item nav-link" id="nav-tab-02" data-toggle="tab" href="#nav-02" role="tab" aria-controls="nav-tab-02" aria-selected="false">02 Ultimate Power Chain Series</a>
  //         <a className="nav-item nav-link" id="nav-tab-03" data-toggle="tab" href="#nav-03" role="tab" aria-controls="nav-tab-03" aria-selected="false">03 Ultimate Life Chain Series</a>
  //         <a className="nav-item nav-link" id="nav-tab-04" data-toggle="tab" href="#nav-04" role="tab" aria-controls="nav-tab-04" aria-selected="false">04 Environmental Resistant Chain Series</a>
  //         <a className="nav-item nav-link" id="nav-tab-05" data-toggle="tab" href="#nav-05" role="tab" aria-controls="nav-tab-05" aria-selected="false">05 Specialty Chain Series</a>
  //       </div>
  //     </nav>
  //     <div className="tab-content" id="nav-tabContent">
  //       <div className="tab-pane fade show active" id="nav-01" role="tabpanel" aria-labelledby="nav-01">탭1</div>
  //       <div className="tab-pane fade" id="nav-02" role="tabpanel" aria-labelledby="nav-02">탭2</div>
  //       <div className="tab-pane fade" id="nav-03" role="tabpanel" aria-labelledby="nav-03">탭3</div>
  //       <div className="tab-pane fade" id="nav-04" role="tabpanel" aria-labelledby="nav-04">탭4</div>
  //       <div className="tab-pane fade" id="nav-05" role="tabpanel" aria-labelledby="nav-05">탭5</div>
  //     </div>

  //   </>
  // )

  return (
    <div className="tabArea">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {series.map((item, key) => {
            return (
              <a
                className="nav-item nav-link"
                id={'nav-tab-' + key}
                data-toggle="tab"
                href={'#nav-' + key}
                role="tab"
                aria-controls={'nav-tab-' + key}
                aria-selected="true"
              >
                {item}
              </a>
            )
          })}
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {series.map((item, key) => {
          return (
            <div
              className="tab-pane fade show"
              id={'nav-' + key}
              role="tabpanel"
              aria-labelledby={'nav-' + key}
            >
              <div>{'tab page for ' + item}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
