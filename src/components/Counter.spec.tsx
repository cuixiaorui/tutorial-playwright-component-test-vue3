import { test, expect } from "@playwright/experimental-ct-vue";
import Counter from "./Counter.vue";

test.use({
  viewport: {
    width: 400,
    height: 400,
  },
});

test('render',async  ({mount}) => {
  const component = await mount(Counter);
  await expect(component).toContainText("Counter");
});

test("should increase count when click increase button", async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component.locator("#count")).toContainText("0")
  await component.getByText("increase").click()
  await expect(component.locator("#count")).toContainText("1")
});

test("should decrease count when click decrease button", async ({ mount }) => {
  const component = await mount(<Counter initCount={1}></Counter>);
  await expect(component.locator("#count")).toContainText("1")
  await component.getByText("decrease").click()
  await expect(component.locator("#count")).toContainText("0")
});


test("min 0", async ({ mount }) => {
  const component = await mount(<Counter initCount={6} min = {5}></Counter>);
  await expect(component.locator("#count")).toContainText("6")
  await component.getByText("decrease").click()
  await expect(component.locator("#count")).toContainText("5")
  await component.getByText("decrease").click()
  await expect(component.locator("#count")).toContainText("5")
});
test("max 10", async ({ mount }) => {
  const component = await mount(<Counter initCount={19} max={20}></Counter>);
  await expect(component.locator("#count")).toContainText("19")
  await component.getByText("increase").click()
  await expect(component.locator("#count")).toContainText("20")
  await component.getByText("increase").click()
  await expect(component.locator("#count")).toContainText("20")
});