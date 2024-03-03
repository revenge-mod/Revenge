import settings from "@lib/settings";
import { useProxy } from "@lib/storage";
import { NavigationNative } from "@metro/common";
import { getAssetIDByName } from "@ui/assets";
import { ErrorBoundary, Forms } from "@ui/components";
import { getRenderableScreens } from "@ui/settings/data";

const { FormRow, FormSection, FormDivider } = Forms;

export default function SettingsSection() {
  const navigation = NavigationNative.useNavigation();
  useProxy(settings);

  const screens = getRenderableScreens();

  return (
    <ErrorBoundary>
      <FormSection
        key="Revenge"
        title={`Revenge${settings.safeMode?.enabled ? " (Safe Mode)" : ""}`}
      >
        {screens.map((s, i) => (
          <>
            <FormRow
              label={s.title}
              leading={<FormRow.Icon source={getAssetIDByName(s.icon!)} />}
              trailing={FormRow.Arrow}
              onPress={() => navigation.push(s.key)}
            />
            {i !== screens.length - 1 && <FormDivider />}
          </>
        ))}
      </FormSection>
    </ErrorBoundary>
  );
}
