class Tabs {
   constructor() {
      this.tabsBlocks = document.querySelectorAll('.js-tabs');
   }

   init() {
      this.tabsBlocks.forEach(block => {
         const buttons = block.querySelectorAll('[data-tab-button]');
         const panels = block.querySelectorAll('[data-tab-panel]');
         buttons.forEach(btn => {
            btn.addEventListener('click', e => {
               e.preventDefault();
               const tabId = btn.dataset.tabId;
               const panel = block.querySelector(`[data-tab-panel][data-tab-id = '${tabId}']`);
               this.#deactivateButtons(buttons);
               this.#deactivatePanels(panels);
               panel.dataset.tabPanel = 'active';
               btn.dataset.tabButton = 'active';
            })
         })
      })
   }

   #deactivatePanels(panels) {
      panels.forEach(panel => panel.dataset.tabPanel = '');
   }

   #deactivateButtons(buttons) {
      buttons.forEach(btn => btn.dataset.tabButton = '');
   }
}

const tabs = new Tabs();
tabs.init();
