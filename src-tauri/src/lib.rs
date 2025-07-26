use tauri::{Manager, WindowEvent};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[allow(unused_variables)]
    tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, args, cwd| {
            let _ = app
                .get_webview_window("main")
                .expect("no main window")
                .set_focus();
        }))
        .plugin(tauri_plugin_os::init())
        .invoke_handler(tauri::generate_handler![])
        .setup(|app| {
            let main_win = app.get_webview_window("main").unwrap();
            let main_win_clone = main_win.clone();
            main_win.on_window_event(move |event| {
                if let WindowEvent::CloseRequested { api, .. } = event {
                    if let Some(win) = main_win_clone.app_handle().get_webview_window("alphabet") {
                        let _ = win.close();
                    }
                }
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
