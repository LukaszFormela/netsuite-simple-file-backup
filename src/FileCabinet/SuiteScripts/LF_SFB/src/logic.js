const logic = {
  getComponent: (componentName, file) => {
    switch (componentName) {
      case 'MainContainer':
        return `
          <script>
            ${this.MainContainer(file)}
            ReactDOM.render(<MainContainer/>, document.getElementById("app"));
          </script>
        `;
    }
  },
  MainContainer: (file) => {
    const fileObject = file.load({id: './components/main_container.js'});
    return fileObject.getContents();
  },
};
